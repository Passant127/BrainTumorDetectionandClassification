import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhistoryComponent } from './phistory.component';

describe('PhistoryComponent', () => {
  let component: PhistoryComponent;
  let fixture: ComponentFixture<PhistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhistoryComponent]
    });
    fixture = TestBed.createComponent(PhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
