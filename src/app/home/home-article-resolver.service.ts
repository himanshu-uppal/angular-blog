import {Injectable} from '@angular/core'
import {Resolve, ActivatedRouteSnapshot} from '@angular/router'
import { ArticleService } from '../core';
import {map} from 'rxjs/operators'

 @Injectable()
export class HomeArticleListResolver implements Resolve<any>{
    constructor(private articleService:ArticleService){
     }
    resolve(route:ActivatedRouteSnapshot){
        console.log('resolving data')
        let tag:string
        let filter:string
        if(route.params['tag']){
            
            tag = route.params['tag']
            filter = '?tag='+tag
            //console.log(filter)
        }
        return this.articleService.getArticles(filter).pipe(map(articles =>articles))
        
     }
 } 