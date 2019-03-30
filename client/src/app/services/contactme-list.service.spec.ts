import { TestBed } from '@angular/core/testing';

import { ContactmeListService } from './contactme-list.service';

describe('ContactmeListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactmeListService = TestBed.get(ContactmeListService);
    expect(service).toBeTruthy();
  });
});
