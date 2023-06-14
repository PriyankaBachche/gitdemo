import { TestBed } from '@angular/core/testing';

import { UserListUsingAPIService } from './user-list-using-api.service';

describe('UserListUsingAPIService', () => {
  let service: UserListUsingAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserListUsingAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
