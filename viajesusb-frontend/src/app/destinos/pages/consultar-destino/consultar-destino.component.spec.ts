import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarDestinoComponent } from './consultar-destino.component';

describe('ConsultarDestinoComponent', () => {
  let component: ConsultarDestinoComponent;
  let fixture: ComponentFixture<ConsultarDestinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarDestinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
