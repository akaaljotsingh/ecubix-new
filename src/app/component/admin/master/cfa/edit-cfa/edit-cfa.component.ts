import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-cfa',
  templateUrl: './edit-cfa.component.html'
})
export class EditCfaComponent {
  countries: string[] = ['India', 'USA', 'UK', 'Canada'];;
  states: string[] =  ['California', 'Texas', 'Florida', 'New York'];
  cities: string[] = ['New York City', 'Los Angeles', 'Chicago', 'Houston'];

}
