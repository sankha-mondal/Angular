import { TestBed } from '@angular/core/testing';

import { UserPaginationServiceService } from './user-pagination-service.service';

describe('UserPaginationServiceService', () => {
  let service: UserPaginationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPaginationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
