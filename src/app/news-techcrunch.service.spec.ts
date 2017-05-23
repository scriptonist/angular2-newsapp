import { TestBed, inject } from '@angular/core/testing';

import { NewsTechcrunchService } from './news-techcrunch.service';

describe('NewsTechcrunchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsTechcrunchService]
    });
  });

  it('should be created', inject([NewsTechcrunchService], (service: NewsTechcrunchService) => {
    expect(service).toBeTruthy();
  }));
});
