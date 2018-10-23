import {Component,OnInit} from '@angular/core'

import {IArticles,IArticle, ArticleService} from '../core'
import {ActivatedRoute} from '@angular/router'
import {AuthenticationService} from '../core'
import { Observable } from 'rxjs';
import {Router} from '@angular/router'
import {map} from 'rxjs/operators'



@Component({
    selector:'app-home-page',
    templateUrl:'./home.component.html'
})
export class HomeComponent implements OnInit{
    articles:IArticles
    allArticles:Array<IArticle>
    isAuthenticated:boolean
    tags:Array<string>
    feed:Array<IArticle>
    paginateLinks:Array<number> = []
    currentLink:number =0

    
    constructor(private articleService:ArticleService,private route:ActivatedRoute,private authenticationService:AuthenticationService,private router:Router){
        console.log('home page constructed')
    }

    ngOnInit(){
        console.log('home page initialized')
        this.populateValues() 
      
    }  
    populateValues(){


        this.route.data.subscribe((currentData) => {
            this.articles =currentData['articles']
            //this.articles = this.route.snapshot.data['articles']
            this.allArticles = this.articles.articles        
            this.isAuthenticated = this.authenticationService.isAuthenticated()
            this.tags = currentData['tags'].tags
            
          });

          for(let i = 0;i<this.articles.articlesCount/20;i++){
            this.paginateLinks.push(i)
        } 



        // this.articles = this.route.snapshot.data['articles']
        // this.allArticles = this.articles.articles        
        // this.isAuthenticated = this.authenticationService.isAuthenticated()
        // this.tags = this.route.snapshot.data['tags'].tags
        // if(this.isAuthenticated){
        //     this.feed = this.route.snapshot.data['feed'].articles
        //     console.log(this.feed)
        // }   
      
    }
    showClickedPage(paginateNumber){
        console.log('paginate to = '+paginateNumber)
        console.log(this.articles)
        let filter = '?offset='+paginateNumber*20+'&limit='+'20'
       
        if(this.route.snapshot.paramMap.get('tag')){            
            filter = filter +'&tag='+this.route.snapshot.paramMap.get('tag')
            //console.log(filter)
        }
       
        this.articleService.getArticles(filter).subscribe(data=>{
            this.articles = data
            this.allArticles = this.articles.articles
        })     
        this.currentLink = paginateNumber  


    }

    
   
    
    
    

}