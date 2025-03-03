import { Component } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-email-read',
  templateUrl: './email-read.component.html',
  styleUrl: './email-read.component.css',
  providers: [BsModalService]
})
export class EmailReadComponent {

  modalRef?: BsModalRef;
    constructor(private modalService: BsModalService) { }
    openModal(content: any) {
      const modalConfig: ModalOptions = {
        backdrop: 'static',  // Prevents closing on backdrop (click outside modal)
        keyboard: false,     // Prevents closing on Escape key press
        ignoreBackdropClick: true, // Prevent closing modal on clicking inside or outside the modal (both)
      };
      this.modalRef = this.modalService.show(content, modalConfig);
    }

}
