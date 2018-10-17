import {Component} from '@angular/core'
import {ActivatedRoute,Router} from '@angular/router'
import {AuthenticationService} from '../core'

@Component({
    selector:'authentication-form',
    templateUrl:'./authentication-form.component.html'
})
export class AuthenticationFormComponent{
    username:string
    email:string
    password:string
    authenticationType:string

    constructor(private route:ActivatedRoute,private authenticationService:AuthenticationService,private router:Router){}

    ngOnInit(){
        this.authenticationType = this.route.snapshot.url[this.route.snapshot.url.length-1].path
        console.log(this.authenticationType)
    }    

    authenticate(formValues){
        this.authenticationService.authenticateUser(this.authenticationType,formValues).subscribe(()=>{
            console.log('user registered')
            this.router.navigate(['/'])

        })     
    }



}