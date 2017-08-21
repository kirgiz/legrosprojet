import { Portfolio } from './portfolio';
import { Injectable } from '@angular/core';

const PORTFOLIOS: Portfolio[] = [
  { id: 11, name: 'Mr. Nice', matchCode: 'NICE', dateOpen: new Date(Date.UTC(2013, 1, 1, 14, 0, 0)) , dateClose: null},
  { id: 12, name: 'Mr. Narco', matchCode: 'NARCO', dateOpen: new Date(Date.UTC(2013, 1, 1, 14, 0, 0)) , dateClose: null},
  { id: 13, name: 'Mr. Bombasto', matchCode: 'BOMBASTO', dateOpen: new Date(Date.UTC(2013, 1, 1, 14, 0, 0)) , dateClose: null},
  { id: 14, name: 'Mr. Celeritas', matchCode: 'CELERITAS', dateOpen: new Date(Date.UTC(2013, 1, 1, 14, 0, 0)) , dateClose: null}
];

@Injectable()
export class PortfolioService {

  constructor() { }

}
