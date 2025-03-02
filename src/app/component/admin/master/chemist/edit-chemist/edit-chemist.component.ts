import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-chemist',
  templateUrl: './edit-chemist.component.html'
})
export class EditChemistComponent {
  countries: string[] = ['India', 'USA', 'UK', 'Canada'];;
  states: string[] =  ['California', 'Texas', 'Florida', 'New York'];
  cities: string[] = ['New York City', 'Los Angeles', 'Chicago', 'Houston'];

}
