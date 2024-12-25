import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentComponent } from './comment.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('CommentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentComponent,],
      providers: [HttpClient, HttpHandler,
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({
              comments: [{id: 1, body: 'comment1'}]
            }),
            snapshot: {
              paramMap: {
                get: (key: string) => null, // Mocking `paramMap.get`
              },
            },
            queryParams: of({}), // Mocking `queryParams` as an observable
          },
        }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
