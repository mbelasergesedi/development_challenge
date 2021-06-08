import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterCancerComponent } from './center-cancer.component';

describe('CenterCancerComponent', () => {
  let component: CenterCancerComponent;
  let fixture: ComponentFixture<CenterCancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterCancerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterCancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
