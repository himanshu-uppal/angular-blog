import {Injectable} from '@angular/core'
import { ISingleComment, IMultipleComments } from '../models';
import { AuthenticationService } from './authentication.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class CommentService{
    constructor(private authenticationService:AuthenticationService,private http:HttpClient){}

    //authentication optional
    getComments(slug:string){
        let url = 'https://conduit.productionready.io/api/articles/'+slug+'/comments' 
        return this.http.get<IMultipleComments>(url)
    }

    //authentication required
    addComment(slug:string,commentBody:string){
        let authorizationToken = this.authenticationService.getCurrentUserToken()
        let options = {headers:new HttpHeaders({'Content-Type':'application/json','Authorization': `Token ${authorizationToken}`})}
        let url = 'https://conduit.productionready.io/api/articles/'+slug+'/comments'       
        let comment = {
            comment: {
              body: commentBody
            }
          }
    
         return this.http.post<ISingleComment>(url,comment,options)
    }

    //authentication required
    deleteComment(slug:string,commentId:number){

        let authorizationToken = this.authenticationService.getCurrentUserToken()
        let options = {headers:new HttpHeaders({'Content-Type':'application/json','Authorization': `Token ${authorizationToken}`})}
        let url = 'https://conduit.productionready.io/api/articles/'+slug+'/comments/'+commentId           
         return this.http.delete(url,options)

    }


}