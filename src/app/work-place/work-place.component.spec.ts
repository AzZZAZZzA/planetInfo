import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPlaceComponent } from './work-place.component';

describe('WorkPlaceComponent', () => {
  let component: WorkPlaceComponent;
  let fixture: ComponentFixture<WorkPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkPlaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
