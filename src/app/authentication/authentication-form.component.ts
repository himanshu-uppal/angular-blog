import {Component} from '@angular/core'
import {ActivatedRoute,Router} from '@angular/router'
import {AuthenticationService} from '../core'
import {IUser} from '../core'
import {Observable} from 'rxjs'

@Component({
    selector:'authentication-form',
    templateUrl:'./authentication-form.component.html'
})
export class AuthenticationFormComponent{
    username:string
    email:string
    password:string
    authenticationType:string
    currentUser:Observable<IUser>

    constructor(private route:ActivatedRoute,
        private authenticationService:AuthenticationService,
        private router:Router){}

    ngOnInit(){
        this.authenticationType = this.route.snapshot.url[this.route.snapshot.url.length-1].path
        console.log(this.authenticationType)
    }    

    authenticate(formValues){
        this.authenticationService.authenticateUser(this.authenticationType,formValues).subscribe((data => {
            console.log(data)
            console.log('user authenticated')
            this.router.navigate(['/'])

        } ))

       this.currentUser = this.authenticationService.getCurrentUser()
       console.log(this.currentUser)
        
    }
          

}