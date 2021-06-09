import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTipoIdentificacionComponent } from './detalle-tipo-identificacion.component';

describe('DetalleTipoIdentificacionComponent', () => {
  let component: DetalleTipoIdentificacionComponent;
  let fixture: ComponentFixture<DetalleTipoIdentificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleTipoIdentificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleTipoIdentificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
