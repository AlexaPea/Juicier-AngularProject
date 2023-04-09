import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildpopupComponent } from './buildpopup.component';

describe('BuildpopupComponent', () => {
  let component: BuildpopupComponent;
  let fixture: ComponentFixture<BuildpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildpopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
