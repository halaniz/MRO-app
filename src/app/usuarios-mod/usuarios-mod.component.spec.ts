import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosModComponent } from './usuarios-mod.component';

describe('UsuariosModComponent', () => {
  let component: UsuariosModComponent;
  let fixture: ComponentFixture<UsuariosModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosModComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
