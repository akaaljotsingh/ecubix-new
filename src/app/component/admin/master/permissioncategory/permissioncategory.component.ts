import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-permissioncategory',
  templateUrl: './permissioncategory.component.html',
  styleUrls: ['./permissioncategory.component.css'],
  providers: [BsModalService]
})
export class PermissioncategoryComponent {

    hidden: boolean;
    selected: any;
    selectValue: string[];
    modalRef?: BsModalRef;
    isChecked: boolean = true; // initial state based on the checkbox being checked or not

    constructor(private modalService: BsModalService) { }

    // Open Modal with configured options to prevent closing on click or Escape key
    openModal(content: any) {
      const modalConfig: ModalOptions = {
        backdrop: 'static',  // Prevents closing on backdrop (click outside modal)
        keyboard: false,     // Prevents closing on Escape key press
        ignoreBackdropClick: true, // Prevent closing modal on clicking inside or outside the modal (both)
      };
      this.modalRef = this.modalService.show(content, modalConfig);
    }

    openModalEdit(contentedit: any) {
      const modalConfig: ModalOptions = {
        backdrop: 'static',  // Prevents closing on backdrop (click outside modal)
        keyboard: false,     // Prevents closing on Escape key press
        ignoreBackdropClick: true, // Prevent closing modal on clicking inside or outside the modal (both)
      };
      this.modalRef = this.modalService.show(contentedit, modalConfig);
    }

    openModalView(contentview: any) {
      const modalConfig: ModalOptions = {
        backdrop: 'static',  // Prevents closing on backdrop (click outside modal)
        keyboard: false,     // Prevents closing on Escape key press
        ignoreBackdropClick: true, // Prevent closing modal on clicking inside or outside the modal (both)
      };
      this.modalRef = this.modalService.show(contentview, modalConfig);
    }

    ngOnInit() {
      this.selectValue = ['Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5'];
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
