import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPoComponent } from './editar-po.component';

describe('EditarPoComponent', () => {
  let component: EditarPoComponent;
  let fixture: ComponentFixture<EditarPoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
