import { TestBed } from '@angular/core/testing';

import { GeycentreService } from './geycentre.service';

describe('GeycentreService', () => {
  let service: GeycentreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeycentreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
