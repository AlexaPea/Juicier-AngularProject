import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftModalComponent } from './craft-modal.component';

describe('CraftModalComponent', () => {
  let component: CraftModalComponent;
  let fixture: ComponentFixture<CraftModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CraftModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CraftModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
