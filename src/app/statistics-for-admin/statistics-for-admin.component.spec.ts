import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsForAdminComponent } from './statistics-for-admin.component';

describe('StatisticsForAdminComponent', () => {
  let component: StatisticsForAdminComponent;
  let fixture: ComponentFixture<StatisticsForAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatisticsForAdminComponent]
    });
    fixture = TestBed.createComponent(StatisticsForAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
