import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViviendasComponent } from './viviendas.component';

describe('ViviendasComponent', () => {
  let component: ViviendasComponent;
  let fixture: ComponentFixture<ViviendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViviendasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViviendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
