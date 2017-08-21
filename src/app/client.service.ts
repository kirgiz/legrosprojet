import { Client } from './client';
import { Injectable } from '@angular/core';

const CLIENT: Client[] = [
  { id: 11, name: 'Client Mr. Nice', matchCode: 'Client NICE', dateOpen: new Date(Date.UTC(2013, 1, 1, 14, 0, 0)) , dateClose: null},
  { id: 12, name: 'Client Mr. Narco', matchCode: 'Client NARCO', dateOpen: new Date(Date.UTC(2013, 1, 1, 14, 0, 0)) , dateClose: null},
  { id: 13, name: 'Client Mr. Bombasto', matchCode: 
  'Client BOMBASTO', dateOpen: new Date(Date.UTC(2013, 1, 1, 14, 0, 0)) , dateClose: null},
  { id: 14, name: 'Client Mr. Celeritas', matchCode: 
  'Client CELERITAS', dateOpen: new Date(Date.UTC(2013, 1, 1, 14, 0, 0)) , dateClose: null}
];

@Injectable()
export class ClientService {

  constructor() { }

}
