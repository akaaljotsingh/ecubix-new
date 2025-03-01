import { Component, TemplateRef, ViewChild } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core';
import { UntypedFormBuilder, Validators, UntypedFormGroup, ReactiveFormsModule } from '@angular/forms';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { LoaderComponent } from 'src/app/shared/ui/loader/loader.component';
import { PagetitleComponent } from 'src/app/shared/ui/pagetitle/pagetitle.component';
@Component({
  selector: 'app-tour-plan',
  templateUrl: './tour-plan.component.html',
  styleUrls: ['./tour-plan.component.css'],

})
export class TourPlanComponent {
  activeCard: string = 'primary'; // Default active card
  calendarEvents: any = [];
  newEventDate: any;
  modalRef?: BsModalRef;
  @ViewChild('modalShow') modalShow: TemplateRef<any>;
  @ViewChild('editmodalShow') editmodalShow: TemplateRef<any>;
  editEvent: any;
  currentEvents: EventApi[] = [];
  formEditData: UntypedFormGroup;
  calendarOptions: CalendarOptions = {
    plugins: [
      interactionPlugin,
      dayGridPlugin,
      timeGridPlugin,
      listPlugin,
    ],
    headerToolbar: {
      left: 'dayGridMonth,dayGridWeek,dayGridDay',
      center: 'title',
      right: 'prevYear,prev,next,nextYear'
    },
    initialView: "dayGridMonth",
    themeSystem: "bootstrap",
    initialEvents: this.calendarEvents,
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    dateClick: this.openModal.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),
    eventTimeFormat: { // like '14:30:00'
      hour: '2-digit',
      minute: '2-digit',
      meridiem: false,
      hour12: true
    }
  };


  // Demo data for groups
  items: string[] = [
    "Saturday bettiah", "DLF+PARAS", "Sonipat Road + Medical mor", "g30", "TUESDAY 1",
    "Jagdispur", "g4", "sep wednes", "N-FRID3", "D-SAT1", "2nd tuesday", "guptewar patch",
    "mon 1", "BARHARIA STAND FRI", "stil gate 1", "Bar tand", "g2", "Day-16 (Friday)",
    "begrajpur 1", "Katrash", "thu 4", "Roorkee C", "Basberia", "saturday1and3"
  ];

  filteredItems: string[] = [];
  selectedItems: string[] = [];



  constructor(
    private modalService: BsModalService, private formBuilder: UntypedFormBuilder
  ) { }




  // Function to set the active card
  setActive(card: string): void {
    this.activeCard = card;
  }

  // Function to handle search input
  onSearch(event: Event): void {
    const query = (event.target as HTMLInputElement).value;
    this.filteredItems = query ? this.items.filter(item => item.toLowerCase().includes(query.toLowerCase())) : [];
  }

  // Function to add an item as a badge
  addItem(item: string): void {
    if (!this.selectedItems.includes(item)) {
      this.selectedItems.push(item);
    }
    this.filteredItems = []; // Clear the dropdown after selection
  }

  // Function to remove an item
  removeItem(item: string): void {
    this.selectedItems = this.selectedItems.filter(i => i !== item);
  }

  getBadgeClass(index: number): string {
    const badgeClasses = ['bg-success', 'bg-warning'];
    return badgeClasses[index % badgeClasses.length]; // Alternate badge colors cyclically
  }




  /**
 * Event add modal
 */
  openModal(event?: any) {
    this.newEventDate = event;
    this.modalRef = this.modalService.show(this.modalShow);
  }

  /**
 * Event click modal show
 */
  handleEventClick(clickInfo: EventClickArg) {
    this.editEvent = clickInfo.event;
    var category = clickInfo.event.classNames;
    this.formEditData = this.formBuilder.group({
      editTitle: clickInfo.event.title,
      editCategory: category instanceof Array ? clickInfo.event.classNames[0] : clickInfo.event.classNames,
    });
    this.modalRef = this.modalService.show(this.editmodalShow);
  }
  /**
   * Events bind in calander
   * @param events events
   */
  handleEvents(events: EventApi[]) {
    this.currentEvents = events;

  }


  handleDrop(event: any): void {
    this.calendarEvents.push({
      title: event.item.data,
      date: event.dateStr,
    });
  }
}
