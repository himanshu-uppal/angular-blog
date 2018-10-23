import {Component, Input} from '@angular/core'
import { IArticle, AuthenticationService } from '../core';

@Component({
    selector:'article-details',
    templateUrl:'./article-details.component.html'

})
export class ArticleDetailsComponent{
    @Input() article:IArticle
    articleAuthor:string

    constructor(private authenticationService:AuthenticationService){}
    ngOnInit(){
        this.authenticationService.getCurrentUser().subscribe(data=>{
            this.articleAuthor = data.user.username
        })
        }

}