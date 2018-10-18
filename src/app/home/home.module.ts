import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {HomeComponent} from './home.component'
import {HomeRoutingModule} from './home-routing.module'
import {HomeArticleListResolver} from './home-resolver.service'
import {AuthenticationService} from '../core'

@NgModule({
    declarations:[HomeComponent],
    imports:[HomeRoutingModule,CommonModule],
    providers:[HomeArticleListResolver,AuthenticationService]
})
export class HomeModule{

}

