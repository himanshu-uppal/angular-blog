import {Component} from '@angular/core'
import { Router,ActivatedRoute } from '@angular/router';
import { IArticle } from '../core';
import {ArticleService,AuthenticationService} from '../core'

@Component({
    templateUrl:'./my-articles.component.html'
})
export class MyArticlesComponent{
    articles:Array<IArticle>
    constructor(private route:ActivatedRoute,private articleService:ArticleService,private authenticationService:AuthenticationService,private router:Router){}

    ngOnInit(){
        this.authenticationService.getCurrentUser().subscribe(data=>{
            this.articleService.getMyArticles(data.user.username).subscribe(data=>{
                this.articles = data.articles
            })
        })             
    }
    deleteArticle(slug){
        this.articleService.deleteArticle(slug).subscribe(data=>{
            this.router.navigateByUrl('/')
        })
    }

}