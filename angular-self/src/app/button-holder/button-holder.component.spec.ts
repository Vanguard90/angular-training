import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonHolderComponent } from './button-holder.component';

describe('ButtonHolderComponent', () => {
  let component: ButtonHolderComponent;
  let fixture: ComponentFixture<ButtonHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
