import {Component} from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { IArticle, IMultipleComments } from '../core';

@Component({
    templateUrl:'./article.component.html'
})
export class ArticleComponent{
    article:IArticle
    comments:IMultipleComments
    constructor(private route:ActivatedRoute){}

    ngOnInit(){

        this.article  = this.route.snapshot.data['article'].article
        this.comments  = this.route.snapshot.data['comments']
        //console.log(this.comments)
    }

}