import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesDemomComponent } from './pipes-demom.component';

describe('PipesDemomComponent', () => {
  let component: PipesDemomComponent;
  let fixture: ComponentFixture<PipesDemomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipesDemomComponent]
    });
    fixture = TestBed.createComponent(PipesDemomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
