import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpRequestorComponent } from './http-requestor.component';

describe('HttpRequestorComponent', () => {
  let component: HttpRequestorComponent;
  let fixture: ComponentFixture<HttpRequestorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpRequestorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpRequestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
