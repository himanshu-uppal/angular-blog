import {Component, OnInit} from '@angular/core'
import {ArticleService, IArticle} from '../core'
import {AuthenticationService} from '../core'
import {Router,ActivatedRoute} from '@angular/router'

@Component({
templateUrl:'./article-update.component.html'
})
export class ArticleUpdateComponent implements OnInit{
    article:IArticle

    constructor(private articleService:ArticleService,
        private authenticationService:AuthenticationService,
        private router:Router,
        private route:ActivatedRoute){}

    ngOnInit(){
        console.log(this.route.snapshot.params['slug'])
         this.articleService.getArticle(this.route.snapshot.params['slug']).subscribe(data=>{
            console.log('article =')
             console.log(data)
             this.article = data
         })
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