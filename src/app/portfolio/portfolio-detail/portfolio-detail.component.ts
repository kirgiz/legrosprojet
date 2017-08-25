import { Portfolio } from './../../portfolio';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.css']
})
export class PortfolioDetailComponent implements OnInit {

  portfolio = new Portfolio();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    alert('Thanks for submitting! Data: ' + JSON.stringify(this.portfolio));
  }

}
