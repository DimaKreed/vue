import { TestBed } from '@angular/core/testing';

import { GetFromApiService } from './get-from-api.service';

describe('GetFromApiService', () => {
  let service: GetFromApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFromApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
