import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrl: './view-employee.component.css'
})
export class ViewEmployeeComponent {
   modalRef?: BsModalRef;
  constructor(private modalService: BsModalService){}
openCompanyConnectionModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }
  closeModal() {
    if (this.modalRef) {
      this.modalRef.hide();
    }
  }
}
