import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerectiveDemoComponent } from './derective-demo.component';

describe('DerectiveDemoComponent', () => {
  let component: DerectiveDemoComponent;
  let fixture: ComponentFixture<DerectiveDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DerectiveDemoComponent]
    });
    fixture = TestBed.createComponent(DerectiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
