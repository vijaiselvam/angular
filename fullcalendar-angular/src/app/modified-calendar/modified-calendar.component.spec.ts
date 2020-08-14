import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiedCalendarComponent } from './modified-calendar.component';

describe('ModifiedCalendarComponent', () => {
  let component: ModifiedCalendarComponent;
  let fixture: ComponentFixture<ModifiedCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifiedCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiedCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
