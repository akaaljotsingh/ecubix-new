import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-mtp-tour-lock-unlock',
  templateUrl: './mtp-tour-lock-unlock.component.html',
  styleUrl: './mtp-tour-lock-unlock.component.css',
  providers: [BsModalService]
})
export class MtpTourLockUnlockComponent {

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
