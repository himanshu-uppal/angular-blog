import {Component} from '@angular/core'
import {ArticleService} from '../core'
import {AuthenticationService} from '../core'
import {Router} from '@angular/router'

@Component({
templateUrl:'./article-create.component.html'
})
export class ArticleCreateComponent{
    title
    description
    body
    tags

    constructor(private articleService:ArticleService,
        private authenticationService:AuthenticationService,
        private router:Router){}

    saveArticle(formValues){
        this.articleService.saveArticle(formValues,this.authenticationService.getCurrentUserToken()).subscribe(
            data=>{
                console.log(data)
                this.router.navigate([''])


            },
            error =>{
                console.log(error)
            }
        )

    }

}