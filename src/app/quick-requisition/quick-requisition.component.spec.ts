import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickRequisitionComponent } from './quick-requisition.component';

describe('QuickRequisitionComponent', () => {
  let component: QuickRequisitionComponent;
  let fixture: ComponentFixture<QuickRequisitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickRequisitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickRequisitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
