import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

import { Observable } from 'rxjs';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Table } from '../../../../pages/tables/advancedtable/advanced.model';

import { tableData } from '../../../../pages/tables/advancedtable/data';

import { AdvancedService } from '../../../../pages/tables/advancedtable/advanced.service';
import { AdvancedSortableDirective, SortEvent } from '../../../../pages/tables/advancedtable/advanced-sortable.directive';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagetitleComponent } from 'src/app/shared/ui/pagetitle/pagetitle.component';

@Component({
  selector: 'app-companyrole',
  templateUrl: './companyrole.component.html',
  styleUrl: './companyrole.component.css',
  providers: [AdvancedService, DecimalPipe,BsDropdownModule],
})
export class CompanyroleComponent {
  data = [
    {companyName:'Reliance Industries',companyId:'R123456789',state:'Maharashtra',city:'Mumbai',type:'Private',status_table:'Active'},
    {companyName:'Tata Consultancy Services',companyId:'T987654321',state:'Maharashtra',city:'Pune',type:'Public',status_table:'Active'},
    {companyName:'Infosys',companyId:'I123498765',state:'Karnataka',city:'Bengaluru',type:'Private',status_table:'Active'},
    {companyName:'HDFC Bank',companyId:'H654321987',state:'Maharashtra',city:'Mumbai',type:'Private',status_table:'Inactive'},
    {companyName:'ICICI Bank',companyId:'I098765432',state:'Maharashtra',city:'Pune',type:'Public',status_table:'Active'},
    {companyName:'Adani Group',companyId:'A567890123',state:'Gujarat',city:'Ahmedabad',type:'Private',status_table:'Active'},
    {companyName:'Wipro',companyId:'W345678901',state:'Karnataka',city:'Bengaluru',type:'Private',status_table:'Inactive'},
    {companyName:'Bharti Airtel',companyId:'B234567890',state:'Delhi',city:'New Delhi',type:'Public',status_table:'Inactive'},
    {companyName:'Mahindra & Mahindra',companyId:'M678901234',state:'Maharashtra',city:'Mumbai',type:'Private',status_table:'Active'},
    {companyName:'Larsen & Toubro',companyId:'L456789012',state:'Maharashtra',city:'Mumbai',type:'Public',status_table:'Inactive'},
    { companyName: 'Google India', companyId: 'G998877665', state: 'Telangana', city: 'Hyderabad', type: 'Private', status_table: 'Active' },
    { companyName: 'Paytm', companyId: 'P554433221', state: 'Delhi', city: 'New Delhi', type: 'Private', status_table: 'Active' },
    { companyName: 'Byju’s', companyId: 'B223344556', state: 'Karnataka', city: 'Bengaluru', type: 'Private', status_table: 'Active' },
    { companyName: 'Uber India', companyId: 'U667788990', state: 'Maharashtra', city: 'Mumbai', type: 'Private', status_table: 'Inactive' },
    { companyName: 'Hero MotoCorp', companyId: 'H123456789', state: 'Haryana', city: 'Gurugram', type: 'Public', status_table: 'Active' },
    { companyName: 'Maruti Suzuki', companyId: 'M665544332', state: 'Haryana', city: 'Gurugram', type: 'Public', status_table: 'Active' },
    { companyName: 'Hindustan Unilever', companyId: 'H112233445', state: 'Maharashtra', city: 'Mumbai', type: 'Private', status_table: 'Active' },
    { companyName: 'Nestle India', companyId: 'N667788990', state: 'Delhi', city: 'New Delhi', type: 'Private', status_table: 'Active' },
    { companyName: 'ITC Limited', companyId: 'I112233667', state: 'West Bengal', city: 'Kolkata', type: 'Public', status_table: 'Active' },
    { companyName: 'Cognizant', companyId: 'C998877665', state: 'Tamil Nadu', city: 'Chennai', type: 'Private', status_table: 'Inactive' },
    { companyName: 'Amazon India', companyId: 'A112233445', state: 'Karnataka', city: 'Bengaluru', type: 'Private', status_table: 'Active' },
    { companyName: 'Flipkart', companyId: 'F667788990', state: 'Karnataka', city: 'Bengaluru', type: 'Private', status_table: 'Active' },
    { companyName: 'Zomato', companyId: 'Z123450987', state: 'Haryana', city: 'Gurugram', type: 'Private', status_table: 'Active' },
    { companyName: 'Ola', companyId: 'O987654321', state: 'Maharashtra', city: 'Mumbai', type: 'Private', status_table: 'Active' },
    { companyName: 'Swiggy', companyId: 'S112233778', state: 'Karnataka', city: 'Bengaluru', type: 'Private', status_table: 'Active' },
    { companyName: 'Tesla India', companyId: 'T998877665', state: 'Tamil Nadu', city: 'Chennai', type: 'Private', status_table: 'Active' },
    { companyName: 'Microsoft India', companyId: 'M445566778', state: 'Hyderabad', city: 'Hyderabad', type: 'Public', status_table: 'Active' },
    { companyName: 'Adobe Systems', companyId: 'A887766554', state: 'Maharashtra', city: 'Mumbai', type: 'Public', status_table: 'Inactive' },
    { companyName: 'Samsung India', companyId: 'S778899334', state: 'Uttar Pradesh', city: 'Noida', type: 'Private', status_table: 'Inactive' },
    { companyName: 'Bharti Infratel', companyId: 'B665544332', state: 'Delhi', city: 'New Delhi', type: 'Public', status_table: 'Inactive' }
  ];

  columns = [
    { key: 'companyName', display: 'Company Name', visible: true, filterable: true },
    { key: 'companyId', display: 'Company ID', visible: true, filterable: true },
    { key: 'state', display: 'State', visible: true, filterable: true },
    { key: 'city', display: 'City', visible: true, filterable: true },
    { key: 'type', display: 'Type', visible: true, filterable: true },
    { key: 'status_table', display: 'Status', visible: true, filterable: true }
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
      item.companyName.toLowerCase().includes(filterValue) ||
      item.companyId.toLowerCase().includes(filterValue) ||
      item.state.toLowerCase().includes(filterValue) ||
      item.city.toLowerCase().includes(filterValue) ||
      item.type.toLowerCase().includes(filterValue) ||
      item.status_table.toLowerCase().includes(filterValue)
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