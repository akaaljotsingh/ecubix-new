import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AdvancedService } from '../../../../pages/tables/advancedtable/advanced.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-mtp-tour-plan-view',
  templateUrl: './mtp-tour-plan-view.component.html',
  styleUrl: './mtp-tour-plan-view.component.css',
  providers: [AdvancedService, DecimalPipe, BsDropdownModule,BsModalService]
})
export class MtpTourPlanViewComponent {

  constructor(private modalService: BsModalService) { }
  modalRef?: BsModalRef;

  openModal(content: any) {
    console.log(content)
    this.modalRef = this.modalService.show(content);
  }

  data = [
    {"Sr.No":1,"City":"Agra","No. of Days Planned":2,"No. of Days Approved":2,"# Doctors":14,"Category":"","YTD Sales":"","Plan Status":"Pending","Remark":""},
    {"Sr.No":2,"City":"Akbarpur","No. of Days Planned":2,"No. of Days Approved":2,"# Doctors":1,"Category":"","YTD Sales":"","Plan Status":"Approved","Remark":""},
    {"Sr.No":3,"City":"Aligarh","No. of Days Planned":2,"No. of Days Approved":2,"# Doctors":10,"Category":"","YTD Sales":"","Plan Status":"Approved","Remark":""},
    {"Sr.No":4,"City":"Allahabad","No. of Days Planned":3,"No. of Days Approved":3,"# Doctors":15,"Category":"","YTD Sales":872133.00,"Plan Status":"Approved","Remark":""},
    {"Sr.No":5,"City":"Basti","No. of Days Planned":3,"No. of Days Approved":3,"# Doctors":12,"Category":"","YTD Sales":"","Plan Status":"Approved","Remark":""},
    {"Sr.No":6,"City":"Bijnor","No. of Days Planned":1,"No. of Days Approved":1,"# Doctors":11,"Category":"","YTD Sales":"","Plan Status":"Approved","Remark":""},
    {"Sr.No":7,"City":"Chappra","No. of Days Planned":5,"No. of Days Approved":5,"# Doctors":3,"Category":"","YTD Sales":"","Plan Status":"Approved","Remark":""},
    {"Sr.No":8,"City":"Jhansi","No. of Days Planned":3,"No. of Days Approved":3,"# Doctors":1,"Category":"","YTD Sales":"","Plan Status":"Approved","Remark":""},
    {"Sr.No":9,"City":"Kanpur","No. of Days Planned":3,"No. of Days Approved":3,"# Doctors":15,"Category":"","YTD Sales":"","Plan Status":"Approved","Remark":""},
    {"Sr.No":10,"City":"Lucknow","No. of Days Planned":2,"No. of Days Approved":2,"# Doctors":12,"Category":"","YTD Sales":"","Plan Status":"Approved","Remark":""}
  ];

  columns = [
    { key: 'Sr.No', display: 'Sr. No', visible: true, filterable: true },
    { key: 'City', display: 'City', visible: true, filterable: true },
    { key: 'No. of Days Planned', display: '# Days Planned', visible: true, filterable: true },
    { key: 'No. of Days Approved', display: '# Days Approved', visible: true, filterable: true },
    { key: '# Doctors', display: '# Doctors', visible: true, filterable: true },
    { key: 'Category', display: 'Category', visible: true, filterable: true }
   // { key: 'YTD Sales', display: 'YTD Sales', visible: true, filterable: true },
   // { key: 'Plan Status', display: 'Plan Status', visible: true, filterable: true },
    //{ key: 'Remark', display: 'Remark', visible: true, filterable: true }
  ];

  

filteredData = [...this.data];
pagedData: any[] = [];
pages: number[] = [];
currentPage = 1;
itemsPerPage = 10;
totalPages = 0;

totalEntries = 0; // Total entries count
startEntry = 0;   // Start index of current page
endEntry = 0;     // End index of current page

pageSizes = [10, 20, 50];
currentSortColumn = '';
isSortAscending = true;
filters: { [key: string]: string | number | null } = {};

ngOnInit(): void {
    this.updatePagination();
}

// Filter Logic - Column Filters
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
      item['Sr.No'].toString().includes(filterValue) ||
      item['City'].toLowerCase().includes(filterValue) ||
      item['No. of Days Planned'].toString().includes(filterValue) ||
      item['No. of Days Approved'].toString().includes(filterValue) ||
      item['# Doctors'].toString().includes(filterValue) ||
      item['Category'].toLowerCase().includes(filterValue) ||
      item['YTD Sales'].toString().includes(filterValue) ||
      item['Plan Status'].toLowerCase().includes(filterValue) ||
      item['Remark'].toLowerCase().includes(filterValue)
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
    this.columns.forEach(column => column.visible = true); // Resets all columns to visible
}

// Pagination Logic
updatePagination() {
    this.totalPages = Math.ceil(this.filteredData.length / this.itemsPerPage);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);

    this.totalEntries = this.filteredData.length; // Update total entries
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
