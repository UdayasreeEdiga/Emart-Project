import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensubComponent } from './womensub.component';

describe('WomensubComponent', () => {
  let component: WomensubComponent;
  let fixture: ComponentFixture<WomensubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomensubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomensubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
