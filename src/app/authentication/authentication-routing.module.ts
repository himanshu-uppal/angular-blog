import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {Routes,RouterModule} from '@angular/router'
import { AuthenticationFormComponent } from './authentication-form.component';

const routes:Routes = [
    {path:'register',component:AuthenticationFormComponent},
    {path:'login',component:AuthenticationFormComponent}

]
@NgModule({
    imports:[CommonModule,RouterModule.forChild(routes)],
    declarations:[],
    exports:[RouterModule]
})
export class AuthenticationRoutingModule{

}



