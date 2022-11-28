import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTutoriasComponent } from './list-tutorias.component';

describe('ListTutoriasComponent', () => {
  let component: ListTutoriasComponent;
  let fixture: ComponentFixture<ListTutoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTutoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTutoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
