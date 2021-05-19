import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDestinoComponent } from './listado-destino.component';

describe('ListadoDestinoComponent', () => {
  let component: ListadoDestinoComponent;
  let fixture: ComponentFixture<ListadoDestinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoDestinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
