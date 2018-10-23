import {Component} from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { IArticle, IMultipleComments, ISingleComment } from '../core';

@Component({
    templateUrl:'./article.component.html'
})
export class ArticleComponent{
    article:IArticle
    comments:ISingleComment[]
    constructor(private route:ActivatedRoute){}

    ngOnInit(){
        console.log('initialized')
        this.article  = this.route.snapshot.data['article'].article
        this.comments  = this.route.snapshot.data['comments'].comments
        //console.log(this.comments)
    }

}