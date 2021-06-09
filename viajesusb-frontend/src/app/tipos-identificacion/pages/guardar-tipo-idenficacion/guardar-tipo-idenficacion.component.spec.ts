import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarTipoIdenficacionComponent } from './guardar-tipo-idenficacion.component';

describe('GuardarTipoIdenficacionComponent', () => {
  let component: GuardarTipoIdenficacionComponent;
  let fixture: ComponentFixture<GuardarTipoIdenficacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardarTipoIdenficacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardarTipoIdenficacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
