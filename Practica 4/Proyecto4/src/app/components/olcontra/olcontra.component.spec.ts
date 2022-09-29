import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlcontraComponent } from './olcontra.component';

describe('OlcontraComponent', () => {
  let component: OlcontraComponent;
  let fixture: ComponentFixture<OlcontraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlcontraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlcontraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
