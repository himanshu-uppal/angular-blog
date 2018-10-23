import {Component} from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { IArticle, IMultipleComments, ISingleComment, AuthenticationService } from '../core';

@Component({
    templateUrl:'./article.component.html'
})
export class ArticleComponent{
    article:IArticle
    comments:ISingleComment[]
    isAuthenticated:boolean
    constructor(private route:ActivatedRoute,private authenticationService:AuthenticationService){}

    ngOnInit(){
        console.log('initialized')
        this.article  = this.route.snapshot.data['article'].article
        this.comments  = this.route.snapshot.data['comments'].comments
        this.authenticationService.isUserAuthenticated.subscribe(data=>
            {
                this.isAuthenticated = data

            })
        //console.log(this.comments)
    }

}