import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SregistrationComponent } from './sregistration.component';

describe('SregistrationComponent', () => {
  let component: SregistrationComponent;
  let fixture: ComponentFixture<SregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
