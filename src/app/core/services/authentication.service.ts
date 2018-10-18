import {Injectable} from '@angular/core'
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {IUser,IResponseUser} from '../models'
import { Observable } from 'rxjs';
import {AuthenticationTokenService} from './authentication-token.service'

@Injectable()
export class AuthenticationService{
    currentUser:IResponseUser
    constructor(private http:HttpClient, private authenticationTokenService:AuthenticationTokenService){}

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
    }
    isAuthenticated(){
        if(this.authenticationTokenService.getToken()){
            return true        }
        
        return false
    }
    logoutUser(){
        this.authenticationTokenService.removeToken()
    }
    

    getCurrentUser(){
        return this.http.get<IUser>('https://conduit.productionready.io/api/user')

    }
    
}