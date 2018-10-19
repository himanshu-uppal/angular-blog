import {Component,OnInit} from '@angular/core'

import {IArticles,IArticle} from '../core'
import {ActivatedRoute} from '@angular/router'
import {AuthenticationService} from '../core'
import { Observable } from 'rxjs';
import {Router} from '@angular/router'
import {map} from 'rxjs/operators'


@Component({
    selector:'app-home-page',
    templateUrl:'./home.component.html'
})
export class HomeComponent implements OnInit{
    articles:IArticles
    allArticles:Array<IArticle>
    isAuthenticated:boolean
    
    constructor(private route:ActivatedRoute,private authenticationService:AuthenticationService,private router:Router){}

    ngOnInit(){
        this.articles = this.route.snapshot.data['articles']
        this.allArticles = this.articles.articles
        this.isAuthenticated = this.authenticationService.isAuthenticated()
       
    }  
    
   
    
    
    logout(){
        this.authenticationService.logoutUser()
        console.log('user logged out')
        this.router.navigate([''])
    }

}