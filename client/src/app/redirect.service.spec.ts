import { TestBed, inject } from '@angular/core/testing';
import { RedirectService } from './redirect.service';

describe('RedirectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RedirectService]
    });
  });

  it('should ...', inject([RedirectService], (service: RedirectService) => {
    expect(service).toBeTruthy();
  }));
});
