import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModProvidersComponent } from './mod-providers.component';

describe('ModProvidersComponent', () => {
  let component: ModProvidersComponent;
  let fixture: ComponentFixture<ModProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModProvidersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
