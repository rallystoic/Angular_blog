import { TestBed } from '@angular/core/testing';

import { CrudPostcontentService } from './crud-postcontent.service';

describe('CrudPostcontentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudPostcontentService = TestBed.get(CrudPostcontentService);
    expect(service).toBeTruthy();
  });
});
