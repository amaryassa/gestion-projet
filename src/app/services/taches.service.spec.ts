import { TestBed } from '@angular/core/testing';

import { TachesService } from './taches.service';

describe('TachesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TachesService = TestBed.get(TachesService);
    expect(service).toBeTruthy();
  });
});
