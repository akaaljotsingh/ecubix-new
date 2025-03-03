import { Component, OnInit } from '@angular/core'; 
import { CommonModule, DecimalPipe } from '@angular/common';
import { AdvancedService } from '../../../../pages/tables/advancedtable/advanced.service';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-geography',
  templateUrl: './geography.component.html',
  styleUrl: './geography.component.css',
  providers: [AdvancedService, DecimalPipe, BsDropdownModule, BsModalService]
})
export class GeographyComponent implements OnInit {
  geoForm: FormGroup;
  selectedGeoType: string = '';

  modalRef?: BsModalRef;
  selectValue: string[];
  isChecked: boolean = true;
  selectedTableClass: string = 'table-success'; // Default to Zone table
  tableData: any[] = []; // Dynamic table content
  tableHeaders: string[] = []; // Dynamic table headers

  zoneData = [
    { id: 1, division: 'North', geoType: 'Zone', code: 'ZN001', name: 'North Zone', status: true },
    { id: 2, division: 'South', geoType: 'Zone', code: 'ZN002', name: 'South Zone', status: false }
  ];

  regionData = [
    { id: 1, division: 'West', geoType: 'Region', zone: 'ZN001', code: 'RG001', name: 'West Region', status: true },
    { id: 2, division: 'East', geoType: 'Region', zone: 'ZN002', code: 'RG002', name: 'East Region', status: true }
  ];

  headquartersData = [
    { id: 1, division: 'Global', geoType: 'Headquarter', hqType: 'Main', region: 'West', state: 'NY', code: 'HQ001', name: 'Global HQ', status: true },
    { id: 2, division: 'India', geoType: 'Headquarter', hqType: 'Regional', region: 'East', state: 'KA', code: 'HQ002', name: 'India HQ', status: false }
  ];

  constructor(private modalService: BsModalService, private fb: FormBuilder) {
    this.geoForm = this.fb.group({
      division: [''],
      geoType: [''],
      code: [''],
      name: [''],
      date: [''],
      active: [false],
      zone: [''],
      regionCode: [''],
      regionName: [''],
      shortCode: [''],
      hqType: [''],
      hqRegion: [''],
      hqState: [''],
      hqCode: [''],
      hqName: [''],
      smsCode: ['']
    });
    this.updateTable('zone'); // Default table data
  }

  onGeoTypeChange(event: any) {
    this.selectedGeoType = event.target.value;
    setTimeout(() => {
      this.geoForm.updateValueAndValidity();
    });
  }

  ngOnInit(): void {
    this.selectValue = ['Loreum Pharma Pvt Ltd.', 'Loreum Pharma', 'Loreum Pharma Co.'];
    this.geoForm = this.fb.group({
      geoType: [''],
      code: [''],
      name: [''],
      date: [''],
      isActive: [false],
    });
    this.selectedGeoType = '';
  }

  checkValue(event: any) {
    this.isChecked = event.target.checked;
    Swal.fire({
      title: 'Are you sure?',
      text: 'In-activate this',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#34c38f',
      cancelButtonColor: '#f46a6a',
      confirmButtonText: 'Yes, In-activate it!'
    }).then(result => {
      if (result.value) {
        Swal.fire('In-activated!', 'Your Zone has been In-activated.', 'success');
      }
    });
  }

  openModal(content: any) {
    this.modalRef = this.modalService.show(content);
  }

  openModalView(contentview: any) {
    this.modalRef = this.modalService.show(contentview);
  }

  openModalEdit(contentedit: any) {
    this.modalRef = this.modalService.show(contentedit);
  }

  updateTable(type: string): void {
    switch (type) {
      case 'zone':
        this.selectedTableClass = 'table-success';
        this.tableData = this.zoneData;
        this.tableHeaders = ['Sl No', 'Division', 'Geo Type', 'Zone Code', 'Zone Name', 'Status', 'Action', 'Next Steps'];
        break;
      case 'region':
        this.selectedTableClass = 'table-info';
        this.tableData = this.regionData;
        this.tableHeaders = ['Sl No', 'Division', 'Geo Type', 'Zone', 'Region Code', 'Region Name', 'Status', 'Action', 'Next Steps'];
        break;
      case 'headquarter':
        this.selectedTableClass = 'table-warning';
        this.tableData = this.headquartersData;
        this.tableHeaders = ['Sl No', 'Division', 'Geo Type', 'Headquarter Type', 'Region', 'State', 'HQ Code', 'HQ Name', 'Status', 'Action', 'Next Steps'];
        break;
      default:
        this.updateTable('zone');
    }
  }
}
