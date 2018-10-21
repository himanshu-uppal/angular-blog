import {Component,Input} from '@angular/core'
import { IArticles, IArticle } from 'src/app/core';

@Component({
    selector:'article-list',
    templateUrl:'./article-list.component.html'
})
export class ArticleListComponent{
    @Input() articles:IArticle[]
    
    
}