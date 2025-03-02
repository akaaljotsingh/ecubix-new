import { Component } from '@angular/core';

@Component({
  selector: 'app-add-chemist',
  templateUrl: './add-chemist.component.html'
})
export class AddChemistComponent {
  selectValue: string[];
  selectValue1: string[];
  countries: string[] = ['India', 'USA', 'UK', 'Canada'];;
  states: string[] =  ['California', 'Texas', 'Florida', 'New York'];
  cities: string[] = ['New York City', 'Los Angeles', 'Chicago', 'Houston'];
  associatedStockist: string[] = ['Stockist 1', 'Stockist 2', 'Stockist 3', 'Stockist 4'];

  constructor() {

  }

  ngOnInit() {
      this.selectValue = ['Notification', 'Announcement'];
      this.selectValue1 = ['All Companies','Loreum Pharma Pvt Ltd.', 'Loreum Pharma', 'Loreum Pharma Co.'];
  }
}
