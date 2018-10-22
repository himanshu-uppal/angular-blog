import {Injectable} from '@angular/core'
import {Resolve} from '@angular/router'
import { ArticleService,AuthenticationTokenService } from '../core';
import {map} from 'rxjs/operators'

 @Injectable()
export class HomeFeedResolver implements Resolve<any>{
    constructor(private articleService:ArticleService,private authenticationTokenService:AuthenticationTokenService){
     }
    resolve(){
        console.log('resolving data')
        let authenticationToken = this.authenticationTokenService.getToken()
        return this.articleService.getFeed(authenticationToken).pipe(map(feed =>feed))
        
     }
 } 