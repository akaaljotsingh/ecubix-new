import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-familydetails',
  templateUrl: './familydetails.component.html',
  styleUrl: './familydetails.component.css',
  providers: [BsModalService]
})
export class FamilydetailsComponent {

  companies = [
    { id: 1, name: 'Company A' },
    { id: 2, name: 'Company B' }
  ];

  employees: any[] = [];
  allEmployees = {
    1: [
      { id: 101, name: 'Employee A1' },
      { id: 102, name: 'Employee A2' }
    ],
    2: [
      { id: 201, name: 'Employee B1' },
      { id: 202, name: 'Employee B2' }
    ]
  };

  selectedCompany: number | null = null;
  selectedEmployee: number | null = null;
  showCard: boolean = false;

  onCompanySelect(companyId: string) {
    this.selectedCompany = Number(companyId);
    this.selectedEmployee = null; // Reset employee selection
    this.employees = this.allEmployees[this.selectedCompany] || [];
  }

  onEmployeeSelect(employeeId: string) {
    this.selectedEmployee = Number(employeeId);
  }

  onApply() {
    if (this.selectedCompany && this.selectedEmployee) {
      this.showCard = true;
    } else {
      alert("Please select both company and employee before applying.");
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

  constructor(private modalService: BsModalService) { }
  modalRef?: BsModalRef;
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

}
