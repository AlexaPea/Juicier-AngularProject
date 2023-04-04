import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryIngrediantsComponent } from './inventory-ingrediants.component';

describe('InventoryIngrediantsComponent', () => {
  let component: InventoryIngrediantsComponent;
  let fixture: ComponentFixture<InventoryIngrediantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryIngrediantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryIngrediantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
