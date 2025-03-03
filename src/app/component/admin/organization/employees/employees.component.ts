import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {

  hidden: boolean;
  
  showSecondCard: boolean = false; // Control visibility of the second card

  selectValue: string[];
  selectValue1: string[];

  constructor() {
    this.hidden = true;
    this.selectValue = [];
    this.selectValue1 = [];
  }

  ngOnInit() {
    this.selectValue = ['Employee Code', 'Phone No.', 'State', 'City', 'Type'];
    this.selectValue1 = ['Loreum Pharma Pvt Ltd.', 'Loreum Pharma', 'Loreum Pharma Co.'];
  }

  // Method to handle the "Apply" button click
  

  // Method to handle checkbox toggle event
  checkValue(event: any) {
    Swal.fire({
      title: 'Are you sure to?',
      text: 'In-active this',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#34c38f',
      cancelButtonColor: '#f46a6a',
      confirmButtonText: 'Yes, In-active it!'
    }).then(result => {
      if (result.value) {
        Swal.fire('In-active!', 'Your client has been In-active.', 'success');
      }
    });
  }
}