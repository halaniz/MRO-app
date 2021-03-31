import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseApprovedComponent } from './purchase-approved.component';

describe('PurchaseApprovedComponent', () => {
  let component: PurchaseApprovedComponent;
  let fixture: ComponentFixture<PurchaseApprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseApprovedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
