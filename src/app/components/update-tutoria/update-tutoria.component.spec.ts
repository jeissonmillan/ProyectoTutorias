import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTutoriaComponent } from './update-tutoria.component';

describe('UpdateTutoriaComponent', () => {
  let component: UpdateTutoriaComponent;
  let fixture: ComponentFixture<UpdateTutoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTutoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTutoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
