import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactmeListComponent } from './contactme-list.component';

describe('ContactmeListComponent', () => {
  let component: ContactmeListComponent;
  let fixture: ComponentFixture<ContactmeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactmeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactmeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
