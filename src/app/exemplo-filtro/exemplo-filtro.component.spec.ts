import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploFiltroComponent } from './exemplo-filtro.component';

describe('ExemploFiltroComponent', () => {
  let component: ExemploFiltroComponent;
  let fixture: ComponentFixture<ExemploFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExemploFiltroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExemploFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
