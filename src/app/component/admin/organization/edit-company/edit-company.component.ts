import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrl: './edit-company.component.css'
})
export class EditCompanyComponent {
  countries: string[] = ['India', 'USA', 'UK', 'Canada'];;
  states: string[] =  ['California', 'Texas', 'Florida', 'New York'];
  cities: string[] = ['New York City', 'Los Angeles', 'Chicago', 'Houston'];


}
