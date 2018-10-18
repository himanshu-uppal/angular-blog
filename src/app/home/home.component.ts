import {Component,OnInit} from '@angular/core'

import {IArticles,IArticle} from '../core'
import {ActivatedRoute} from '@angular/router'
import {AuthenticationService} from '../core'
import { Observable } from 'rxjs';

@Component({
    selector:'app-home-page',
    templateUrl:'./home.component.html'
})
export class HomeComponent implements OnInit{
    articles:IArticles
    allArticles:Array<IArticle>
    
    constructor(private route:ActivatedRoute,private authenticationService:AuthenticationService){}

    ngOnInit(){
        this.articles = this.route.snapshot.data['articles']
        this.allArticles = this.articles.articles
    }

    isAuthenticated(){
       return  this.authenticationService.isAuthenticated()
    }
    logout(){
        this.authenticationService.logoutUser()
    }

}