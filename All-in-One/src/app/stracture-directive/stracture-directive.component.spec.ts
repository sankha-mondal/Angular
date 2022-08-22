import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StractureDirectiveComponent } from './stracture-directive.component';

describe('StractureDirectiveComponent', () => {
  let component: StractureDirectiveComponent;
  let fixture: ComponentFixture<StractureDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StractureDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StractureDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
