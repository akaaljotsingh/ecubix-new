import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-retailer',
  templateUrl: './edit-retailer.component.html'
})
export class EditRetailerComponent {
  countries: string[] = ['India', 'USA', 'UK', 'Canada'];;
  states: string[] =  ['California', 'Texas', 'Florida', 'New York'];
  cities: string[] = ['New York City', 'Los Angeles', 'Chicago', 'Houston'];
  associatedStockist: string[] = ['Stockist 1', 'Stockist 2', 'Stockist 3', 'Stockist 4'];

}
