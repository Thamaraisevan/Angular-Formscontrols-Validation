import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFormcontrolsValidationComponent } from './angular-formcontrols-validation.component';

describe('AngularFormcontrolsValidationComponent', () => {
  let component: AngularFormcontrolsValidationComponent;
  let fixture: ComponentFixture<AngularFormcontrolsValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularFormcontrolsValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularFormcontrolsValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
