import {Injectable} from '@angular/core'
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {IResponseUser} from '../models'
import { Observable, ReplaySubject } from 'rxjs';
import {AuthenticationTokenService} from './authentication-token.service'

@Injectable()
export class AuthenticationService{
    currentUser:IResponseUser
    
  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isUserAuthenticated = this.isAuthenticatedSubject.asObservable();
    constructor(private http:HttpClient, private authenticationTokenService:AuthenticationTokenService){
        if(this.authenticationTokenService.getToken()){
            this.isAuthenticatedSubject.next(true)
        }
        else{
            this.isAuthenticatedSubject.next(false)
        }
    }   

    authenticateUser(authenticationType:string,userValues:any):Observable<IResponseUser>{
        let options = {headers:new HttpHeaders({'Content-Type':'application/json'})}
        if(authenticationType == 'register'){
            
            let user = {
                user:{
                    username:userValues.username,
                    email:userValues.email,
                    password:userValues.password
                }
            }

            console.log(user)
            return this.http.post<IResponseUser>('https://conduit.productionready.io/api/users',user,options);
        }
        if(authenticationType == 'login'){
           
            let user = {
                user:{
                    email:userValues.email,
                    password:userValues.password
                }
            }

            console.log(user)
            return this.http.post<IResponseUser>('https://conduit.productionready.io/api/users/login',user,options);
        }  
        

    }

    loginUser(){       
        this.authenticationTokenService.setToken(this.currentUser.user.token)
        this.isAuthenticatedSubject.next(true);
    }
    isAuthenticated(){
        if(this.authenticationTokenService.getToken()){
            return true       
        }
        
        return false
    }
    logoutUser(){
        this.authenticationTokenService.removeToken()
        this.isAuthenticatedSubject.next(false);
    }

    getCurrentUserToken(){
        return this.authenticationTokenService.getToken()
    }
    getCurrentUser(){
        let authorizationToken = this.authenticationTokenService.getToken()    
        let options = {headers:new HttpHeaders({'Content-Type':'application/json','Authorization': `Token ${authorizationToken}`})}
        let url = 'https://conduit.productionready.io/api/user'
        return this.http.get<IResponseUser>(url,options)
    } 
    getCurrentUsername(){
        this.getCurrentUser().subscribe(data=>{
            return data.user.username
        })
    }
}