import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RedirectCommand, Resolve, RouterStateSnapshot } from '@angular/router';
import { Comments } from '../comment';
import { CommentService } from '../comment.service';

@Injectable({
  providedIn: 'root'
})
export class CommentGuard implements Resolve<Comments[]> {

  constructor(private CommentService: CommentService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<Comments[] | RedirectCommand> {
    return this.CommentService.getComments();
  }
  
  
}
