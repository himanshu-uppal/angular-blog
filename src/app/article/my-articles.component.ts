import {Component} from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { IArticle } from '../core';

@Component({
    templateUrl:'./my-articles.component.html'
})
export class MyArticlesComponent{
    articles:Array<IArticle>
    constructor(private route:ActivatedRoute){}

    ngOnInit(){
        
        // this.articles = this.route.snapshot.data['articles'].articles
        // console.log(this.articles)
        
       
    }

}