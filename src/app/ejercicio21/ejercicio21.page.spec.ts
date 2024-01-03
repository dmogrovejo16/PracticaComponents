import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ejercicio21Page } from './ejercicio21.page';

describe('Ejercicio21Page', () => {
  let component: Ejercicio21Page;
  let fixture: ComponentFixture<Ejercicio21Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Ejercicio21Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
