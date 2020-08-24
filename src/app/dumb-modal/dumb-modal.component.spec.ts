import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbModalComponent } from './dumb-modal.component';

describe('DumbModalComponent', () => {
  let component: DumbModalComponent;
  let fixture: ComponentFixture<DumbModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DumbModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DumbModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
