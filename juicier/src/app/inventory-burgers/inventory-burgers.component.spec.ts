import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryBurgersComponent } from './inventory-burgers.component';

describe('InventoryBurgersComponent', () => {
  let component: InventoryBurgersComponent;
  let fixture: ComponentFixture<InventoryBurgersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryBurgersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryBurgersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
