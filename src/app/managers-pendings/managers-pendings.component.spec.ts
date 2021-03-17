import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagersPendingsComponent } from './managers-pendings.component';

describe('ManagersPendingsComponent', () => {
  let component: ManagersPendingsComponent;
  let fixture: ComponentFixture<ManagersPendingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagersPendingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagersPendingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
