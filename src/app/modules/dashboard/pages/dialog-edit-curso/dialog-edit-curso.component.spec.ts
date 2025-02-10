import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditCursoComponent } from './dialog-edit-curso.component';

describe('DialogEditCursoComponent', () => {
  let component: DialogEditCursoComponent;
  let fixture: ComponentFixture<DialogEditCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogEditCursoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
