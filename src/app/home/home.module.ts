import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {HomeComponent} from './home.component'
import {HomeRoutingModule} from './home-routing.module'
import {HomeArticleListResolver} from './home-resolver.service'

@NgModule({
    declarations:[HomeComponent],
    imports:[HomeRoutingModule,CommonModule],
    providers:[HomeArticleListResolver]
})
export class HomeModule{

}

