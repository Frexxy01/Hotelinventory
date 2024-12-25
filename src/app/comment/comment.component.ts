import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CommentService } from './comment.service';
import { Comments } from './comment';
import { Observable, map, pluck } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment',
  imports: [CommonModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent implements OnInit {

  constructor(private commentService : CommentService, private activatedRoute: ActivatedRoute) {
    this.comments$ = this.commentService.getComments()
  }
  ngOnInit(): void {
    console.log('initializing comments...')
    this.comment$ = this.activatedRoute.data.pipe(
      map((data) => data['comments'])
    )
     
  }
  comments$ : Observable<Comments[]>;

  comment$ : any;




 
}
