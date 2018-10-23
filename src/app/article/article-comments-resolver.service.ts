import {Injectable} from '@angular/core'
import {Resolve, ActivatedRoute} from '@angular/router'
import { CommentService } from '../core';
import { map } from 'rxjs/operators';

@Injectable()
export class ArticleCommentsResolver implements Resolve<any>{
    constructor(private route:ActivatedRoute,private commentService:CommentService){}

    resolve(){
        let slug = this.route.params['slug']
        return this.commentService.getComments(slug).pipe(map(comments=>comments))    

    }

}