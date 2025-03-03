import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrl: './company.component.css',
  //imports: [NgSelectModule]

})

export class CompanyComponent {

  hidden: boolean;
  selected: any;

  selectValue: string[];

  isChecked: boolean = true; // initial state based on the checkbox being checked or not

  

  ngOnInit() {
    this.selectValue = ['Company Name', 'Phone No.', 'State', 'City', 'Type'];
    this.selected = '';
    this.hidden = true;
  }


  checkValue(event: any) {
    this.isChecked = event.target.checked;
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

