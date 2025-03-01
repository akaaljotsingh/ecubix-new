import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-mtp-tour-plan',
  templateUrl: './mtp-tour-plan.component.html',
  styleUrl: './mtp-tour-plan.component.css',
  providers: [BsModalService]
})
export class MtpTourPlanComponent {

  constructor(private modalService: BsModalService) { }
  modalRef?: BsModalRef;

  extraLarge(exlargeModal: any) {
    this.modalRef = this.modalService.show(exlargeModal, { class: 'modal-xl' });
  }

  openModal(content: any) {
    console.log(content)
    this.modalRef = this.modalService.show(content);
  }

}
