import { Component, OnInit } from '@angular/core';

import { Portfolio } from '../../portfolio';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.css']
})
export class PortfolioDetailComponent implements OnInit {

  address = new Portfolio();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    alert('Thanks for submitting! Data: ' + JSON.stringify(this.address));
  }

}
