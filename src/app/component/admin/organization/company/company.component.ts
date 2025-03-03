import { CommonModule, DecimalPipe } from '@angular/common';
import { Component, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrl: './company.component.css',
  //imports: [NgSelectModule]

})

export class CompanyComponent {
  modalRef?: BsModalRef;
  hidden: boolean;
  selected: any;
  selectedChildView: boolean = false;

  selectValue: string[];

  isChecked: boolean = true;
  clients = [
    { id: 1, name: "Client A" },
    { id: 2, name: "Client B" },
    { id: 3, name: "Client C" },
    { id: 4, name: "Client D" },
  ];
  selectedParent: number | null = 1;
  selectedChildren: number[] = [];
  searchTerm: string = '';

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    this.selectValue = ['Company Name', 'Phone No.', 'State', 'City', 'Type'];
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

  openCompanyConnectionModal(template: TemplateRef<any>, type?: string) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
    if (type == 'child') {
      this.selectedChildView = true;
    } else {
      this.selectedChildView = false;
    }
  }

  closeModal() {
    if (this.modalRef) {
      this.modalRef.hide();
    }
  }

  getClientName(clientId: number): string {
    return this.clients.find(client => client.id === clientId)?.name || '';
  }

  removeChild(clientId: number) {
    this.selectedChildren = this.selectedChildren.filter(id => id !== clientId);
  }

  saveConnections() {
    console.log("Parent Client:", this.selectedParent);
    console.log("Child Clients:", this.selectedChildren);
    this.closeModal();
  }
}

