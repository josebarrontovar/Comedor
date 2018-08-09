import { TestBed, inject } from '@angular/core/testing';

import { GarrisonService } from './garrison.service';

describe('GarrisonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GarrisonService]
    });
  });

  it('should be created', inject([GarrisonService], (service: GarrisonService) => {
    expect(service).toBeTruthy();
  }));
});
