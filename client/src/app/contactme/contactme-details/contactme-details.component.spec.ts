import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactmeDetailsComponent } from './contactme-details.component';

describe('ContactmeDetailsComponent', () => {
  let component: ContactmeDetailsComponent;
  let fixture: ComponentFixture<ContactmeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactmeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactmeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
