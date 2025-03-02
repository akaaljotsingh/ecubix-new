import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html'
})
export class EditDoctorComponent {
  countries: string[] = ['India', 'USA', 'UK', 'Canada'];;
  states: string[] =  ['California', 'Texas', 'Florida', 'New York'];
  cities: string[] = ['New York City', 'Los Angeles', 'Chicago', 'Houston'];

}
