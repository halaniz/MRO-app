import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerPendingsComponent } from './controller-pendings.component';

describe('ControllerPendingsComponent', () => {
  let component: ControllerPendingsComponent;
  let fixture: ComponentFixture<ControllerPendingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControllerPendingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerPendingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
