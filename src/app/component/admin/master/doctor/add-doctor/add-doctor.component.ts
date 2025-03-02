import { Component } from '@angular/core';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
})
export class AddDoctorComponent {
  selectValue: string[];
  selectValue1: string[];
  countries: string[] = ['India', 'USA', 'UK', 'Canada'];;
  states: string[] =  ['California', 'Texas', 'Florida', 'New York'];
  cities: string[] = ['New York City', 'Los Angeles', 'Chicago', 'Houston'];


  constructor() {

  }

  ngOnInit() {
      this.selectValue = ['Notification', 'Announcement'];
      this.selectValue1 = ['All Companies','Loreum Pharma Pvt Ltd.', 'Loreum Pharma', 'Loreum Pharma Co.'];
  }
}
