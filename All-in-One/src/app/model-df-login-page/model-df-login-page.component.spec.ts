import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDfLoginPageComponent } from './model-df-login-page.component';

describe('ModelDfLoginPageComponent', () => {
  let component: ModelDfLoginPageComponent;
  let fixture: ComponentFixture<ModelDfLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelDfLoginPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelDfLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
