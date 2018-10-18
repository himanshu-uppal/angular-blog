import {Component, OnInit} from '@angular/core'
import {AuthenticationService} from '../../core'

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'

})
export class HeaderComponent implements OnInit{
    isAuthenticated:boolean
    constructor(private authenticationService:AuthenticationService){}

    ngOnInit(){
        this.isAuthenticated =this.authenticationService.isAuthenticated()
    }
    
}