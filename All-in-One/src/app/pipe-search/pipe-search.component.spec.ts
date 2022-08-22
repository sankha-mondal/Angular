import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeSearchComponent } from './pipe-search.component';

describe('PipeSearchComponent', () => {
  let component: PipeSearchComponent;
  let fixture: ComponentFixture<PipeSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
