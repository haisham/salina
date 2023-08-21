import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class DataAccessConfiguration {
  rootUrl: string = 'http://localhost:5003';
}
export interface DataAccessConfigurationInterface {
  rootUrl?: string;
}
