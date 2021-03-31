import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassMroComponent } from './pass-mro.component';

describe('PassMroComponent', () => {
  let component: PassMroComponent;
  let fixture: ComponentFixture<PassMroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassMroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassMroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
