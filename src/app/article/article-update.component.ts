import {Component, OnInit} from '@angular/core'
import {ArticleService, IArticle} from '../core'
import {AuthenticationService} from '../core'
import {Router,ActivatedRoute} from '@angular/router'

@Component({
templateUrl:'./article-update.component.html'
})
export class ArticleUpdateComponent implements OnInit{
    article:any

    constructor(private articleService:ArticleService,
        private authenticationService:AuthenticationService,
        private router:Router,
        private route:ActivatedRoute){}

    ngOnInit(){
        this.article = this.route.snapshot.data['article']        
    }

    updateArticle(){
        this.articleService.updateArticle(this.article,this.authenticationService.getCurrentUserToken()).subscribe(
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