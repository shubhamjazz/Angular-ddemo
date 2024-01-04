import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseDemoComponent } from './promise-demo.component';

describe('PromiseDemoComponent', () => {
  let component: PromiseDemoComponent;
  let fixture: ComponentFixture<PromiseDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromiseDemoComponent]
    });
    fixture = TestBed.createComponent(PromiseDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
