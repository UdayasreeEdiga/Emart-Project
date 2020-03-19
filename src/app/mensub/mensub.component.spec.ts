import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensubComponent } from './mensub.component';

describe('MensubComponent', () => {
  let component: MensubComponent;
  let fixture: ComponentFixture<MensubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
