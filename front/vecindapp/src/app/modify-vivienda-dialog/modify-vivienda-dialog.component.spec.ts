import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyViviendaDialogComponent } from './modify-vivienda-dialog.component';

describe('ModifyViviendaDialogComponent', () => {
  let component: ModifyViviendaDialogComponent;
  let fixture: ComponentFixture<ModifyViviendaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyViviendaDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyViviendaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
