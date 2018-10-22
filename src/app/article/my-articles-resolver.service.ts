import {Injectable} from '@angular/core'
import {Resolve} from '@angular/router'
import { ArticleService, IArticles, AuthenticationService, IResponseUser, IUser } from '../core';
import {map} from 'rxjs/operators'

 @Injectable()
export class MyArticlesResolver implements Resolve<any>{
    //articles:IArticles

    username:string
    constructor(private articleService:ArticleService,private authenticationService:AuthenticationService){
     }
    resolve(){       
        this.authenticationService.getCurrentUser().subscribe((data:IResponseUser)=>{
            this.username = data.user.username;
            this.setCurrentUser(this.username)
            
        })
        console.log(this.username)
        
     }
     setCurrentUser(username:string){
         console.log(username)
         return this.articleService.getMyArticles(username).pipe(map(articles => articles))              
     }
 } 