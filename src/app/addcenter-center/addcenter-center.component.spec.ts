import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcenterCenterComponent } from './addcenter-center.component';

describe('AddcenterCenterComponent', () => {
  let component: AddcenterCenterComponent;
  let fixture: ComponentFixture<AddcenterCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcenterCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcenterCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
