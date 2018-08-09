import { TestBed, inject } from '@angular/core/testing';

import { StewService } from './stew.service';

describe('StewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StewService]
    });
  });

  it('should be created', inject([StewService], (service: StewService) => {
    expect(service).toBeTruthy();
  }));
});
