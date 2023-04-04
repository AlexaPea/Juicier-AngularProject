import { TestBed } from '@angular/core/testing';

import { IngrediantService } from './ingrediants.service';

describe('IngrediantsService', () => {
  let service: IngrediantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngrediantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
