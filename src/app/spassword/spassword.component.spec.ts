import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpasswordComponent } from './spassword.component';

describe('SpasswordComponent', () => {
  let component: SpasswordComponent;
  let fixture: ComponentFixture<SpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
