import {Injectable} from '@angular/core'
import {Resolve, ActivatedRouteSnapshot} from '@angular/router'
import { CommentService } from '../core';
import { map } from 'rxjs/operators';

@Injectable()
export class ArticleCommentsResolver implements Resolve<any>{
    constructor(private commentService:CommentService){}

    resolve(route:ActivatedRouteSnapshot){
        let slug = route.params['slug']
        return this.commentService.getComments(slug).pipe(map(comments=>comments))    
    }

}