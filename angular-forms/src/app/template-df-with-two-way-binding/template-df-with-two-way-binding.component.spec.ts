import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDfWithTwoWayBindingComponent } from './template-df-with-two-way-binding.component';

describe('TemplateDfWithTwoWayBindingComponent', () => {
  let component: TemplateDfWithTwoWayBindingComponent;
  let fixture: ComponentFixture<TemplateDfWithTwoWayBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDfWithTwoWayBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDfWithTwoWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
