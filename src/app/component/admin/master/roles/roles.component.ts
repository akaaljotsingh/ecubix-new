import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  selectedCompany: string | null = null; // Track the selected company
  showSecondCard: boolean = false; // Control visibility of the second card
  selectValue1: string[];

  constructor() {
    this.selectValue1 = [];
  }

  ngOnInit() {
     this.selectValue1 = ['Loreum Pharma Pvt Ltd.', 'Loreum Pharma', 'Loreum Pharma Co.'];
  }

  onApply() {
      if (this.selectedCompany) {
        this.showSecondCard = true; // Show the second card
      } else {
        Swal.fire('Error', 'Please select a company first.', 'error');
      }
    }

  isChecked: boolean = true; // initial state based on the checkbox being checked or not

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
