import { TestBed } from '@angular/core/testing';

import { CommentGuard } from './comment.guard';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

describe('CommentGuard', () => {
  let guard: CommentGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler, ]
    });
    guard = TestBed.inject(CommentGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
