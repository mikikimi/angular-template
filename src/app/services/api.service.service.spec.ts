import { TestBed } from '@angular/core/testing';

import { ApiServiceService } from './api.service.service';

describe('Api.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiServiceService = TestBed.get(ApiServiceService);
    expect(service).toBeTruthy();
  });
});
