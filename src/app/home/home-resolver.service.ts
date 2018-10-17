import {Injectable} from '@angular/core'
import {Resolve} from '@angular/router'
import { ArticleService } from '../core';
import {map} from 'rxjs/operators'

 @Injectable()
export class HomeArticleListResolver implements Resolve<any>{
    constructor(private articleService:ArticleService){
     }
    resolve(){
        console.log('resolving data')
        return this.articleService.getArticles().pipe(map(articles =>articles))
        
     }
 } 