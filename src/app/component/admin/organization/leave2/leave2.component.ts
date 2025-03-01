import { Component } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule, BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-leave2',
  standalone: true,
  imports: [TabsModule, ModalModule],
  templateUrl: './leave2.component.html',
  styleUrls: ['./leave2.component.css']
})
export class Leave2Component {

  constructor(private modalService: BsModalService) { }
  modalRef?: BsModalRef;

  openModal(content: any) {
    console.log(content)
    this.modalRef = this.modalService.show(content);
  }
  
}
