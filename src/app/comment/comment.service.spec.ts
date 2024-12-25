import { TestBed } from '@angular/core/testing';

import { CommentService } from './comment.service';
import { ConfigService } from '../services/config.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('CommentService', () => {
  let service: CommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ConfigService,
        HttpClient,
        HttpHandler
      ]
    });
    service = TestBed.inject(CommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
