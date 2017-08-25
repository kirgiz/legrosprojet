import { PortfolioService } from './../portfolio.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataSource} from '@angular/cdk';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { MdPaginator , MdPaginatorModule, MdSort} from '@angular/material';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';
import { Portfolio } from './../portfolio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  displayedColumns = ['PortfolioId', 'PortfolioName'];
  portfolioDatabase: PortfolioDatabase = new PortfolioDatabase(this.portfolioService);
  dataSource: PortfolioDataSource | null;
  selectedPortfolio: Portfolio;
  @ViewChild(MdPaginator) paginator: MdPaginator;
  @ViewChild(MdSort) sort: MdSort;
  @ViewChild('filter') filter: ElementRef;

  constructor(
    private portfolioService: PortfolioService,
    private router: Router) { }

  ngOnInit() {
    this.dataSource = new PortfolioDataSource(this.portfolioDatabase, this.paginator, this.sort);
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
    .debounceTime(150)
    .distinctUntilChanged()
    .subscribe(() => {
      if (!this.dataSource) { return; }
      this.dataSource.filter = this.filter.nativeElement.value;
    });
  }
  onSelect(portfolio: Portfolio): void {
    this.selectedPortfolio = portfolio;
   this.gotoDetail();
  }

  gotoDetail(): void {
    this.router.navigate(['/portfolioDetail']);
  }
}

export interface PortfolioData {
  id: number;
  name: string;
}

export class PortfolioDataSource extends DataSource<any> {
  _filterChange = new BehaviorSubject('');
  get filter(): string { return this._filterChange.value; }
  set filter(filter: string) { this._filterChange.next(filter); }

  constructor(private _portfolioDatabase: PortfolioDatabase, private _paginator: MdPaginator, private _sort: MdSort
  ) {
    super();
  }
  connect(): Observable<PortfolioData[]> {
    const displayDataChanges = [
      this._portfolioDatabase.dataChange,
      this._paginator.page,
      this._sort.mdSortChange,
      this._filterChange
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      const data = this._portfolioDatabase.data.slice().filter((item: PortfolioData) => {
        const searchStr = (item.name + item.id).toLowerCase();
        return searchStr.indexOf(
          this.filter.toLowerCase()
      ) != -1;  }
    );
      // Grab the page's slice of data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return this.getSortedData(data.splice(startIndex, this._paginator.pageSize));
    });
 }

 disconnect() { }
  getSortedData(_portfolioData: PortfolioData[]): PortfolioData[] {
    const data = _portfolioData;
    if (!this._sort.active || this._sort.direction == '') { return data; }

    return data.sort((a, b) => {
      let propertyA: number|string = '';
      let propertyB: number|string = '';

      switch (this._sort.active) {
        case 'PortfolioId': [propertyA, propertyB] = [a.id, b.id]; break;
        case 'PortfolioName': [propertyA, propertyB] = [a.name, b.name]; break;
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction == 'asc' ? 1 : -1);
    });
  }
}

export class PortfolioDatabase {
  dataChange: BehaviorSubject<PortfolioData[]> = new BehaviorSubject<PortfolioData[]>([]);
  portfolios: Portfolio[];
  get data(): PortfolioData[] { return this.dataChange.value; }
  constructor(private portfolioService: PortfolioService) {
    const copiedData = this.data.slice();
    this.portfolios = this.portfolioService.getPortfolios();
    for (let index = 0; index < this.portfolios.length; index++) {
      copiedData.push({
        id: this.portfolios[index].id, name: this.portfolios[index].name
      });
      this.dataChange.next(copiedData);
    }
  }
}

