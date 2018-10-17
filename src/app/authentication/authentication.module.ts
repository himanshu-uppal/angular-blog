import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'

import {AuthenticationFormComponent} from './authentication-form.component'
import {AuthenticationRoutingModule} from './authentication-routing.module'
import {AuthenticationService} from '../core'

@NgModule({
    declarations:[
        AuthenticationFormComponent
    ],
    imports:[CommonModule,
        AuthenticationRoutingModule,
        FormsModule
    ],
    exports:[],
    providers:[AuthenticationService]

})
export class AuthenticationModule{

}