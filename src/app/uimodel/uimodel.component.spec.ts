import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIModelComponent } from './uimodel.component';

describe('UIModelComponent', () => {
  let component: UIModelComponent;
  let fixture: ComponentFixture<UIModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UIModelComponent]
    });
    fixture = TestBed.createComponent(UIModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
