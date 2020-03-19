import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FursubComponent } from './fursub.component';

describe('FursubComponent', () => {
  let component: FursubComponent;
  let fixture: ComponentFixture<FursubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FursubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FursubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
