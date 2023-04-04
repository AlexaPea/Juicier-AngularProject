import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationScreenComponent } from './location-screen.component';

describe('LocationScreenComponent', () => {
  let component: LocationScreenComponent;
  let fixture: ComponentFixture<LocationScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
