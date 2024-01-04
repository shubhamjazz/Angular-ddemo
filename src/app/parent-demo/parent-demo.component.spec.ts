import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentDemoComponent } from './parent-demo.component';

describe('ParentDemoComponent', () => {
  let component: ParentDemoComponent;
  let fixture: ComponentFixture<ParentDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentDemoComponent]
    });
    fixture = TestBed.createComponent(ParentDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
