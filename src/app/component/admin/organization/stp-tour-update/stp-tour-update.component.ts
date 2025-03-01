import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AdvancedService } from '../../../../pages/tables/advancedtable/advanced.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-stp-tour-update',
  templateUrl: './stp-tour-update.component.html',
  styleUrl: './stp-tour-update.component.css',
  providers: [AdvancedService, DecimalPipe, BsDropdownModule,BsModalService]
})
export class StpTourUpdateComponent {

  constructor(private modalService: BsModalService) { }
  modalRef?: BsModalRef;

  extraLarge(exlargeModal: any) {
    this.modalRef = this.modalService.show(exlargeModal, { class: 'modal-xl' });
  }

  data = [
    {"dr_code":"00015311","dr_name":"Umesh Kumar","sms_code":"ALL202","category":"B","speciality":"Consulting Physician","city":"Agra","employee_name":"Anoop Mishra","reporting_hq":"Allahabad","plan_remarks":"Day2,P7HQ","my_plan_days":"Day2,P7HQ","abm_plan_days":"","rbm_plan_days":"","zbm_plan_days":""},
    {"dr_code":"00015689","dr_name":"U.B Yadav","sms_code":"ALL356","category":"A","speciality":"Orthopaedic Surgeon","city":"Agra","employee_name":"Anoop Mishra","reporting_hq":"Allahabad","plan_remarks":"Day2,P7HQ","my_plan_days":"Day2,P7HQ","abm_plan_days":"","rbm_plan_days":"","zbm_plan_days":""},
    {"dr_code":"00024600","dr_name":"Sunita Gaur","sms_code":"ALL428","category":"B","speciality":"Obstetrics and Gynecology","city":"Agra","employee_name":"Anoop Mishra","reporting_hq":"Allahabad","plan_remarks":"firstday,Day2,P7HQ","my_plan_days":"firstday,Day2,P7HQ","abm_plan_days":"","rbm_plan_days":"","zbm_plan_days":""},
    {"dr_code":"00032861","dr_name":"Varun Kumar TriTripa","sms_code":"ALL491","category":"A","speciality":"Consulting Physician","city":"Agra","employee_name":"Anoop Mishra","reporting_hq":"Allahabad","plan_remarks":"firstday,Day2","my_plan_days":"firstday,Day2","abm_plan_days":"","rbm_plan_days":"","zbm_plan_days":""},
    {"dr_code":"00033191","dr_name":"U C Goal","sms_code":"ALL494","category":"A","speciality":"General Surgeon","city":"Agra","employee_name":"Anoop Mishra","reporting_hq":"Allahabad","plan_remarks":"firstday,Day2","my_plan_days":"firstday,Day2","abm_plan_days":"","rbm_plan_days":"","zbm_plan_days":""},
    {"dr_code":"00033307","dr_name":"Wards Hashmat","sms_code":"ALL499","category":"B","speciality":"Gynaecologist","city":"Agra","employee_name":"Anoop Mishra","reporting_hq":"Allahabad","plan_remarks":"Day3,P4HQ,P5HQ","my_plan_days":"Day3,P4HQ,P5HQ","abm_plan_days":"","rbm_plan_days":"","zbm_plan_days":""},
    {"dr_code":"00034265","dr_name":"Dr Sid Vyas","sms_code":"ALL542","category":"A","speciality":"Cardio","city":"Agra","employee_name":"Anoop Mishra","reporting_hq":"Allahabad","plan_remarks":"","my_plan_days":"","abm_plan_days":"","rbm_plan_days":"","zbm_plan_days":""},
    {"dr_code":"00034272","dr_name":"Dr A","sms_code":"ALL548","category":"A","speciality":"Cardiologist","city":"Agra","employee_name":"Anoop Mishra","reporting_hq":"Allahabad","plan_remarks":"","my_plan_days":"","abm_plan_days":"","rbm_plan_days":"","zbm_plan_days":""},
    {"dr_code":"00034270","dr_name":"Riya Gupta","sms_code":"ALL546","category":"A","speciality":"Cardio","city":"Agra","employee_name":"Anoop Mishra","reporting_hq":"Allahabad","plan_remarks":"","my_plan_days":"","abm_plan_days":"","rbm_plan_days":"","zbm_plan_days":""},
    {"dr_code":"00034283","dr_name":"Dr Sid Vyas","sms_code":"ALL554","category":"A","speciality":"Cardio","city":"Agra","employee_name":"Anoop Mishra","reporting_hq":"Allahabad","plan_remarks":"","my_plan_days":"","abm_plan_days":"","rbm_plan_days":"","zbm_plan_days":""},

  ];

  columns = [
    { key: 'dr_code', display: 'Doctor Code', visible: true, filterable: true },
    { key: 'dr_name', display: 'Doctor Name', visible: true, filterable: true },
    { key: 'sms_code', display: 'SMS Code', visible: true, filterable: true },
    { key: 'category', display: 'Category', visible: true, filterable: true },
    { key: 'speciality', display: 'Speciality', visible: true, filterable: true },
    { key: 'city', display: 'City', visible: true, filterable: true },
    { key: 'employee_name', display: 'Employee Name', visible: true, filterable: true },
    { key: 'reporting_hq', display: 'Reporting HQ', visible: true, filterable: true },
    { key: 'plan_remarks', display: 'Plan Remarks', visible: true, filterable: true },
    { key: 'my_plan_days', display: 'My Plan Days', visible: true, filterable: true },
    { key: 'abm_plan_days', display: 'ABM Plan Days', visible: true, filterable: true },
    { key: 'rbm_plan_days', display: 'RBM Plan Days', visible: true, filterable: true },
    { key: 'zbm_plan_days', display: 'ZBM Plan Days', visible: true, filterable: true }
];


  
  filteredData = [...this.data];
  pagedData: any[] = [];
  pages: number[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  totalPages = 0;
  
  totalEntries = 0;
  startEntry = 0;
  endEntry = 0;
  
  pageSizes = [10, 20, 50];
  currentSortColumn = '';
  isSortAscending = true;
  filters: { [key: string]: string | number | null } = {};
  
  ngOnInit(): void {
    this.updatePagination();
  }
  
  // Filter Logic
  applyColumnFilter(column: string, event: Event) {
    const value = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.filters[column] = value || null;
    this.filteredData = this.data.filter(item => this.matchesFilters(item));
    this.currentPage = 1;
    this.updatePagination();
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();

    this.filteredData = this.data.filter(item =>
        item['city'].toLowerCase().includes(filterValue) ||
        item['dr_code'].toLowerCase().includes(filterValue) ||
        item['dr_name'].toLowerCase().includes(filterValue) ||
        item['sms_code'].toLowerCase().includes(filterValue) ||
        item['category'].toLowerCase().includes(filterValue) ||
        item['speciality'].toLowerCase().includes(filterValue) ||
        item['employee_name'].toLowerCase().includes(filterValue) ||
        item['reporting_hq'].toLowerCase().includes(filterValue) ||
        item['plan_remarks'].toLowerCase().includes(filterValue) ||
        item['my_plan_days'].toLowerCase().includes(filterValue) ||
        item['abm_plan_days'].toLowerCase().includes(filterValue) ||
        item['rbm_plan_days'].toLowerCase().includes(filterValue) ||
        item['zbm_plan_days'].toLowerCase().includes(filterValue)
    );

    this.currentPage = 1;
    this.updatePagination();
}

  
  
  matchesFilters(item: any): boolean {
    return Object.keys(this.filters).every(column => {
      const filterValue = this.filters[column];
      const itemValue = item[column]?.toString().toLowerCase() || '';
      return filterValue ? itemValue.includes(filterValue.toString()) : true;
    });
  }
  
  // Sorting Logic
  sortData(column: string) {
    if (this.currentSortColumn === column) {
      this.isSortAscending = !this.isSortAscending;
    } else {
      this.currentSortColumn = column;
      this.isSortAscending = true;
    }
  
    this.filteredData.sort((a, b) => {
      const valueA = a[column as keyof typeof a];
      const valueB = b[column as keyof typeof b];
  
      return this.isSortAscending
        ? valueA > valueB ? 1 : -1
        : valueA < valueB ? 1 : -1;
    });
  
    this.currentPage = 1;
    this.updatePagination();
  }
  
  toggleColumn(columnKey: string) {
    const column = this.columns.find(col => col.key === columnKey);
    if (column) {
      column.visible = !column.visible;
    }
  }
  
  resetColumns() {
    this.columns.forEach(column => (column.visible = true));
  }
  
  // Pagination Logic
  updatePagination() {
    this.totalPages = Math.ceil(this.filteredData.length / this.itemsPerPage);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  
    this.totalEntries = this.filteredData.length;
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
  
    this.startEntry = startIndex + 1;
    this.endEntry = Math.min(endIndex, this.totalEntries);
  
    this.pagedData = this.filteredData.slice(startIndex, endIndex);
  }
  
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }
  
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }
  
  goToPage(page: number) {
    this.currentPage = page;
    this.updatePagination();
  }
  
  changePageSize(event: Event) {
    this.itemsPerPage = +(event.target as HTMLSelectElement).value;
    this.currentPage = 1;
    this.updatePagination();
  }

  toggleSelectAll(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.pagedData.forEach(item => {
      item.selected = isChecked;  // Assuming 'selected' is the field used for checkboxes
    });
  }


}
