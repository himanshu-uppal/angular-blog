import {Injectable} from '@angular/core'
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {IUser} from '../models'

@Injectable()
export class AuthenticationService{
    constructor(private http:HttpClient){}

    authenticateUser(authenticationType:string,userValues:any){
        if(authenticationType == 'register'){
            let options = {headers:new HttpHeaders({'Content-Type':'application/json'})}
            let user = {
                user:{
                    username:userValues.username,
                    email:userValues.email,
                    password:userValues.password
                }
            }

            console.log(user)
            return this.http.post<IUser>('https://conduit.productionready.io/api/users',user,options)
        }
        

    }
    
}