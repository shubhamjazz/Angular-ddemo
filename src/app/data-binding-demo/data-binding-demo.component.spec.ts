import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingDemoComponent } from './data-binding-demo.component';

describe('DataBindingDemoComponent', () => {
  let component: DataBindingDemoComponent;
  let fixture: ComponentFixture<DataBindingDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataBindingDemoComponent]
    });
    fixture = TestBed.createComponent(DataBindingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
