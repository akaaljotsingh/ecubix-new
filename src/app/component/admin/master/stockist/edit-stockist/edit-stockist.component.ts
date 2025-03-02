import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-stockist',
  templateUrl: './edit-stockist.component.html'
})
export class EditStockistComponent {
  countries: string[] = ['India', 'USA', 'UK', 'Canada'];;
  states: string[] =  ['California', 'Texas', 'Florida', 'New York'];
  cities: string[] = ['New York City', 'Los Angeles', 'Chicago', 'Houston'];

}
