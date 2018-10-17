import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {Routes,RouterModule} from '@angular/router'
import {SignUpComponent} from './sign-up.component'
import {SignInComponent} from './sign-in.component'

const routes:Routes = [
    {path:'register',component:SignUpComponent},
    {path:'login',component:SignInComponent}

]
@NgModule({
    imports:[CommonModule,RouterModule.forChild(routes)],
    declarations:[],
    exports:[RouterModule]

})
export class AuthenticationRoutingModule{

}



