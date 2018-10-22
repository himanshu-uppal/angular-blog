import {Component} from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { IArticles } from '../core';

@Component({
    templateUrl:'./article.component.html'
})
export class MyArticlesComponent{
    articles:IArticles
    constructor(private route:ActivatedRoute){}

    ngOnInit(){

        this.articles = this.route.snapshot.data['articles']
        console.log(this.articles)
    }

}