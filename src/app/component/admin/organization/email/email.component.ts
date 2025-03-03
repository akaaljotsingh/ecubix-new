import { Component } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrl: './email.component.css',
  providers: [BsModalService]
})
export class EmailComponent {

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
