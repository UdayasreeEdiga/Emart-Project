import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LsellerComponent } from './lseller.component';

describe('LsellerComponent', () => {
  let component: LsellerComponent;
  let fixture: ComponentFixture<LsellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LsellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LsellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
