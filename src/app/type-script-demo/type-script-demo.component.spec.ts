import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeScriptDemoComponent } from './type-script-demo.component';

describe('TypeScriptDemoComponent', () => {
  let component: TypeScriptDemoComponent;
  let fixture: ComponentFixture<TypeScriptDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeScriptDemoComponent]
    });
    fixture = TestBed.createComponent(TypeScriptDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
