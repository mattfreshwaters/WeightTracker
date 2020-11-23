import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntriesDashboardComponent } from './entries-dashboard.component';

describe('EntriesDashboardComponent', () => {
  let component: EntriesDashboardComponent;
  let fixture: ComponentFixture<EntriesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntriesDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntriesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
