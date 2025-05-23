import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorCreadoDialogComponent } from './administrador-creado-dialog.component';

describe('AdministradorCreadoDialogComponent', () => {
  let component: AdministradorCreadoDialogComponent;
  let fixture: ComponentFixture<AdministradorCreadoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministradorCreadoDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministradorCreadoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
