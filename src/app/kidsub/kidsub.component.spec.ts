import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsubComponent } from './kidsub.component';

describe('KidsubComponent', () => {
  let component: KidsubComponent;
  let fixture: ComponentFixture<KidsubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidsubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
