import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioJefesComponent } from './usuario-jefes.component';

describe('UsuarioJefesComponent', () => {
  let component: UsuarioJefesComponent;
  let fixture: ComponentFixture<UsuarioJefesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioJefesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioJefesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
