import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AdvancedService } from '../../../../pages/tables/advancedtable/advanced.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-stp-tour-view',
  templateUrl: './stp-tour-view.component.html',
  styleUrl: './stp-tour-view.component.css',
  providers: [AdvancedService, DecimalPipe, BsDropdownModule,BsModalService]
})
export class StpTourViewComponent {

  constructor(private modalService: BsModalService) { }
  modalRef?: BsModalRef;

  openModal(content: any) {
    console.log(content)
    this.modalRef = this.modalService.show(content);
  }

  extraLarge(exlargeModal: any) {
    this.modalRef = this.modalService.show(exlargeModal, { class: 'modal-xl' });
  }

  data = [
    {"Day": "firstday", "Planned City": "Agra, Allahabad", "Employee Name": "Anoop Mishra", "Approved Dr.s": 6, "Plan Status": "Approved", "Planned Remarks": "", "Senior Remarks": "", "Edit Plan": "Edit Plan"},
    {"Day": "Day2", "Planned City": "Agra, Allahabad", "Employee Name": "Anoop Mishra", "Approved Dr.s": 6, "Plan Status": "Pending", "Planned Remarks": "", "Senior Remarks": "", "Edit Plan": "Edit Plan"},
    {"Day": "Day3", "Planned City": "Agra", "Employee Name": "Anoop Mishra", "Approved Dr.s": 1, "Plan Status": "Approved", "Planned Remarks": "", "Senior Remarks": "", "Edit Plan": "Edit Plan"},
    {"Day": "P4HQ", "Planned City": "Agra", "Employee Name": "Anoop Mishra", "Approved Dr.s": 1, "Plan Status": "Approved", "Planned Remarks": "", "Senior Remarks": "", "Edit Plan": "Edit Plan"},
    {"Day": "P5HQ", "Planned City": "Agra", "Employee Name": "Anoop Mishra", "Approved Dr.s": 1, "Plan Status": "Approved", "Planned Remarks": "", "Senior Remarks": "", "Edit Plan": "Edit Plan"},
    {"Day": "P6HQ", "Planned City": "Agra", "Employee Name": "Anoop Mishra", "Approved Dr.s": 1, "Plan Status": "Approved", "Planned Remarks": "", "Senior Remarks": "", "Edit Plan": "Edit Plan"},
    {"Day": "P7HQ", "Planned City": "Agra", "Employee Name": "Anoop Mishra", "Approved Dr.s": 1, "Plan Status": "Approved", "Planned Remarks": "", "Senior Remarks": "", "Edit Plan": "Edit Plan"},
    {"Day": "P8ExHQ", "Planned City": "Agra", "Employee Name": "Anoop Mishra", "Approved Dr.s": 4, "Plan Status": "Pending", "Planned Remarks": "", "Senior Remarks": "", "Edit Plan": "Edit Plan"},
    {"Day": "P9ExHQ", "Planned City": "Agra", "Employee Name": "Anoop Mishra", "Approved Dr.s": 1, "Plan Status": "Approved", "Planned Remarks": "", "Senior Remarks": "", "Edit Plan": "Edit Plan"},
    {"Day": "P10OS", "Planned City": "Agra", "Employee Name": "Anoop Mishra", "Approved Dr.s": 1, "Plan Status": "Approved", "Planned Remarks": "", "Senior Remarks": "", "Edit Plan": "Edit Plan"}
  ];

  columns = [
    { key: 'Day', display: 'Day', visible: true, filterable: true },
    { key: 'Planned City', display: 'Planned City', visible: true, filterable: true },
    { key: 'Employee Name', display: 'Employee Name', visible: true, filterable: true },
    { key: 'Approved Dr.s', display: '# Approved Dr.s', visible: true, filterable: true },
    { key: 'Plan Status', display: 'Plan Status', visible: true, filterable: true },
    { key: 'Planned Remarks', display: 'Planned Remarks', visible: true, filterable: true },
    { key: 'Senior Remarks', display: 'Senior Remarks', visible: true, filterable: true },
    { key: 'Edit Plan', display: 'Edit Plan', visible: true, filterable: false }
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
        item['Day'].toLowerCase().includes(filterValue) ||
        item['Planned City'].toLowerCase().includes(filterValue) ||
        item['Employee Name'].toLowerCase().includes(filterValue) ||
        item['Approved Dr.s'].toString().includes(filterValue) ||
        item['Plan Status'].toLowerCase().includes(filterValue) ||
        (item['Planned Remarks'] ? item['Planned Remarks'].toLowerCase().includes(filterValue) : false) ||
        (item['Senior Remarks'] ? item['Senior Remarks'].toLowerCase().includes(filterValue) : false)
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
