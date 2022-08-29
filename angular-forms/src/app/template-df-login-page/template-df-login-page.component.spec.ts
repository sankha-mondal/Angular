import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDfLoginPageComponent } from './template-df-login-page.component';

describe('TemplateDfLoginPageComponent', () => {
  let component: TemplateDfLoginPageComponent;
  let fixture: ComponentFixture<TemplateDfLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDfLoginPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDfLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
