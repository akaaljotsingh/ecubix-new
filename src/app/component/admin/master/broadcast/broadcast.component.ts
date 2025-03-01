import { Component } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-broadcast',
  templateUrl: './broadcast.component.html',
  styleUrl: './broadcast.component.css'
})
export class BroadcastComponent {

  hidden: boolean;
    selectedCompany: string | null = null; // Track the selected company
    showSecondCard: boolean = false; // Control visibility of the second card
  
    selectValue: string[];
    selectValue1: string[];
  
    constructor() {
      this.hidden = true;
      this.selectValue = [];
      this.selectValue1 = [];
    }
  
    ngOnInit() {
      this.selectValue = ['Notification', 'Announcement'];
      this.selectValue1 = ['All Companies','Loreum Pharma Pvt Ltd.', 'Loreum Pharma', 'Loreum Pharma Co.'];
      this.showSecondCard = true;  // Automatically show the second card
    }
  
    // Method to handle the "Apply" button click
    onApply() {
      if (this.selectedCompany) {
        this.showSecondCard = true; // Show the second card
      } else {
        Swal.fire('Error', 'Please select a company first.', 'error');
      }
    }
  
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
