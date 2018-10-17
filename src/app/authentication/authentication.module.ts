import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {SignInComponent} from './sign-in.component'
import {SignUpComponent} from './sign-up.component'
import {AuthenticationFormComponent} from './authentication-form.component'
import {AuthenticationRoutingModule} from './authentication-routing.module'

@NgModule({
    declarations:[SignInComponent,
        SignUpComponent,
        AuthenticationFormComponent
    ],
    imports:[CommonModule,
        AuthenticationRoutingModule
    ],
    exports:[],
    providers:[]

})
export class AuthenticationModule{

}