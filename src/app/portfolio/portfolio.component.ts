import { PortfolioService } from './../portfolio.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {DataSource} from '@angular/cdk';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {MdPaginator } from '@angular/material';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { Portfolio } from './../portfolio';




@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  displayedColumns = ['PortfolioId', 'PortfolioName'];
  exampleDatabase = new ExampleDatabase();
  dataSource: ExampleDataSource | null;
  @ViewChild(MdPaginator) paginator: MdPaginator;
  ngOnInit() {
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
  }


}

export interface PortfolioData {
  id: number;
  name: string;
}

export class ExampleDataSource extends DataSource<any> {
  constructor(private _exampleDatabase: ExampleDatabase, private _paginator: MdPaginator) {
  super();
}
connect(): Observable<PortfolioData[]> {
  const displayDataChanges = [
    this._exampleDatabase.dataChange,
    this._paginator.page,
  ];

  return Observable.merge(...displayDataChanges).map(() => {
    const data = this._exampleDatabase.data.slice();

    // Grab the page's slice of data.
    const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
    return data.splice(startIndex, this._paginator.pageSize);
  });
}

disconnect() {}
}

export class ExampleDatabase {
  dataChange: BehaviorSubject<PortfolioData[]> = new BehaviorSubject<PortfolioData[]>([]);
  portfolios: Portfolio[];
  get data(): PortfolioData[] { return this.dataChange.value; }
  constructor() {
    const copiedData = this.data.slice();
    //copiedData.push(this.createNewUser());
    //this.dataChange.next(copiedData);
  }
}
