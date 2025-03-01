import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-user',
  templateUrl: './product-user.component.html',
  styleUrl: './product-user.component.css'
})
export class ProductUserComponent {


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
