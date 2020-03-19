import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LbuyerComponent } from './lbuyer.component';

describe('LbuyerComponent', () => {
  let component: LbuyerComponent;
  let fixture: ComponentFixture<LbuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbuyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
