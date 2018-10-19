import {Component} from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { IArticle } from '../core';

@Component({
    templateUrl:'./article.component.html'
})
export class ArticleComponent{
    article:IArticle
    constructor(private route:ActivatedRoute){}

    ngOnInit(){

        this.article  = this.route.snapshot.data['article'].article
        console.log(this.article)
    }

}