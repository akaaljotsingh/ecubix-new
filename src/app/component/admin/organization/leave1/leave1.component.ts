import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { AdvancedService } from '../../../../pages/tables/advancedtable/advanced.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-leave1',
  templateUrl: './leave1.component.html',
  styleUrl: './leave1.component.css',
  providers: [AdvancedService,DecimalPipe,BsModalService]
})
export class Leave1Component {

  constructor(private modalService: BsModalService) { }
  modalRef?: BsModalRef;

  openModal(content: any) {
    console.log(content)
    this.modalRef = this.modalService.show(content);
  }

}
