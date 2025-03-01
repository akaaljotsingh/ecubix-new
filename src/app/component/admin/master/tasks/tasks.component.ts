import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  providers: [BsModalService]
})
export class TasksComponent {
  hidden: boolean;
  selected: any;
      
  selectValue: string[];
  modalRef?: BsModalRef;
      
  isChecked: boolean = true; // initial state based on the checkbox being checked or not
    
  constructor(private modalService: BsModalService) { }
        
    
  openModal(content: any) {
    console.log(content)
    this.modalRef = this.modalService.show(content);
  }
      
        
      
  ngOnInit() {
    this.selectValue = ['Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5'];
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
  

}
