import {Component,OnInit} from '@angular/core'

import {IArticles,IArticle} from '../core'
import {ActivatedRoute} from '@angular/router'

@Component({
    selector:'app-home-page',
    templateUrl:'./home.component.html'
})
export class HomeComponent implements OnInit{
    articles:IArticles
    allArticles:Array<IArticle>
    
    constructor(private route:ActivatedRoute){}

    ngOnInit(){
        this.articles = this.route.snapshot.data['articles']
        this.allArticles = this.articles.articles
    }

}