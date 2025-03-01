import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AdvancedService } from '../../../../pages/tables/advancedtable/advanced.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-mtp-tour-plan-update',
  templateUrl: './mtp-tour-plan-update.component.html',
  styleUrl: './mtp-tour-plan-update.component.css',
  providers: [AdvancedService, DecimalPipe, BsDropdownModule,BsModalService]
})
export class MtpTourPlanUpdateComponent {

  constructor(private modalService: BsModalService) { }
  modalRef?: BsModalRef;

  extraLarge(exlargeModal: any) {
    this.modalRef = this.modalService.show(exlargeModal, { class: 'modal-xl' });
  }

  data = [
    {"city":"Agra","days":2,"doctors":14,"A+":0,"A++":0,"H":0,"B+":0,"B":3,"C":0,"C+":0,"D":2,"E":0,"General":0,"G":0,"A":9},
    {"city":"Akbarpur","days":2,"doctors":1,"A+":0,"A++":0,"H":0,"B+":0,"B":0,"C":0,"C+":0,"D":0,"E":0,"General":0,"G":0,"A":1},
    {"city":"Aligarh","days":2,"doctors":10,"A+":0,"A++":0,"H":0,"B+":0,"B":0,"C":0,"C+":0,"D":0,"E":0,"General":0,"G":0,"A":10},
    {"city":"Allahabad","days":3,"doctors":15,"A+":0,"A++":0,"H":0,"B+":0,"B":0,"C":0,"C+":0,"D":0,"E":0,"General":0,"G":0,"A":10},
    {"city":"Basti","days":3,"doctors":12,"A+":0,"A++":0,"H":0,"B+":0,"B":8,"C":0,"C+":0,"D":0,"E":0,"General":0,"G":0,"A":7},
    {"city":"Bijnor","days":1,"doctors":11,"A+":0,"A++":0,"H":0,"B+":0,"B":2,"C":0,"C+":0,"D":0,"E":0,"General":0,"G":0,"A":3},
    {"city":"Chhapra","days":5,"doctors":3,"A+":0,"A++":0,"H":0,"B+":0,"B":4,"C":0,"C+":0,"D":0,"E":0,"General":0,"G":0,"A":1},
    {"city":"Jhansi","days":3,"doctors":1,"A+":0,"A++":0,"H":0,"B+":0,"B":0,"C":0,"C+":0,"D":0,"E":0,"General":0,"G":0,"A":1},
  ];

  columns = [
   // { key: 'Sr.No', display: 'Sr. No', visible: true, filterable: true },
    { key: 'city', display: 'City', visible: true, filterable: true },
    { key: 'days', display: 'No. of Days Planned', visible: true, filterable: true },
    { key: 'doctors', display: 'No. of Doctors', visible: true, filterable: true },
    { key: 'A+', display: 'A+', visible: true, filterable: true },
    { key: 'A++', display: 'A++', visible: true, filterable: true },
    { key: 'H', display: 'H', visible: true, filterable: true },
    { key: 'B+', display: 'B+', visible: true, filterable: true },
    { key: 'B', display: 'B', visible: true, filterable: true },
    { key: 'C', display: 'C', visible: true, filterable: true },
    { key: 'C+', display: 'C+', visible: true, filterable: true },
    { key: 'D', display: 'D', visible: true, filterable: true },
    { key: 'E', display: 'E', visible: true, filterable: true },
    { key: 'General', display: 'General', visible: true, filterable: true },
    { key: 'G', display: 'G', visible: true, filterable: true },
    { key: 'A', display: 'A', visible: true, filterable: true }
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
        item['days'].toString().includes(filterValue) ||
        item['doctors'].toString().includes(filterValue) ||
        item['A+'].toString().includes(filterValue) ||
        item['A++'].toString().includes(filterValue) ||
        item['H'].toString().includes(filterValue) ||
        item['B+'].toString().includes(filterValue) ||
        item['B'].toString().includes(filterValue) ||
        item['C'].toString().includes(filterValue) ||
        item['C+'].toString().includes(filterValue) ||
        item['D'].toString().includes(filterValue) ||
        item['E'].toString().includes(filterValue) ||
        item['General'].toString().includes(filterValue) ||
        item['G'].toString().includes(filterValue) ||
        item['A'].toString().includes(filterValue)
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

}
