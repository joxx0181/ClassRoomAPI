import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactThanksComponent } from './contact-thanks.component';

describe('ContactThanksComponent', () => {
  let component: ContactThanksComponent;
  let fixture: ComponentFixture<ContactThanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactThanksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactThanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
