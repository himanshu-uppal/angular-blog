import {Component, OnInit} from '@angular/core'
import {AuthenticationService} from '../../core'
import { Router } from '@angular/router';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'

})
export class HeaderComponent implements OnInit{
    isAuthenticated:boolean
    constructor(private authenticationService:AuthenticationService,private router:Router){}

    ngOnInit(){
        this.isAuthenticated = this.authenticationService.isAuthenticated()
    }
    logout(){
        this.authenticationService.logoutUser()
        console.log('user logged out')
        this.router.navigate([''])
    }

    isUserLoggedIn(){
        if(this.authenticationService.getCurrentUserToken){
            return true
        }
        return false
        
    }
    
}