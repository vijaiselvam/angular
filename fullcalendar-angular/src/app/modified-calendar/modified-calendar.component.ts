import { Component, ViewChild } from '@angular/core';
import { CalendarOptions, EventApi, FullCalendarComponent } from '@fullcalendar/angular';
import { INITIAL_EVENTS } from '../event-utils';

@Component({
  selector: 'app-modified-calendar',
  templateUrl: './modified-calendar.component.html',
  styleUrls: ['./modified-calendar.component.scss']
})
export class ModifiedCalendarComponent {
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  public calendarOptions: CalendarOptions;

  constructor() {
    this.calendarOptions = {
      headerToolbar: {
        left: 'prev today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek next'
      },
      initialView: 'dayGridMonth',
      initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
      weekends: true,
      editable: true,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true
    };
    
  }

  currentEvents: EventApi[] = [];

  changeMonthView() {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.changeView('dayGridMonth');
  }
  changeWeekView() {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.changeView('dayGridWeek');
  }
  changeDayView() {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.changeView('timeGridDay');
  }
  changelistView() {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.changeView('listWeek');
  }
}
