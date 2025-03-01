import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-stp-tour-plan',
  templateUrl: './stp-tour-plan.component.html',
  styleUrl: './stp-tour-plan.component.css',
  providers: [BsModalService]
})
export class StpTourPlanComponent {

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
