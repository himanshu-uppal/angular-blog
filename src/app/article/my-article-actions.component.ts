import {Component, Input} from '@angular/core'
import { ArticleService } from '../core';
import { Router } from '@angular/router';

@Component({
    selector:'article-actions',
    templateUrl:'./my-article-actions.component.html'
})
export class MyArticleActionsComponent{
    @Input() slug:string
    constructor(private articleService:ArticleService,private router:Router){}

    deleteArticle(slug){
        this.articleService.deleteArticle(slug).subscribe(data=>{ 
            this.router.navigate([''])           
        })
       
    }

}