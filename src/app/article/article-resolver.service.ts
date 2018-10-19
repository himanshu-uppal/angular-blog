import {Injectable} from '@angular/core'
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ArticleService } from '../core';
import { map } from 'rxjs/operators';


@Injectable()
export class ArticleResolverService implements Resolve<any>{
    constructor(private articleService:ArticleService){}

    resolve(route:ActivatedRouteSnapshot){
        console.log(route)
        return this.articleService.getArticle(route.params['slug']).pipe(map(article => article))
    }

}