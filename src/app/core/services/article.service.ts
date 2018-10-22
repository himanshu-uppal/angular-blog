import {Injectable} from '@angular/core'
import {IArticles, IArticle, IResponseUser} from '../models'
import {Observable} from 'rxjs'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { AuthenticationService } from './authentication.service';
import { AuthenticationTokenService } from './authentication-token.service';

@Injectable()
export class ArticleService{
   
    constructor(private http:HttpClient,private authenticationService:AuthenticationService,private authenticationTokenService:AuthenticationTokenService){ }
   
    getArticles():Observable<IArticles>{
        return this.http.get<IArticles>('https://conduit.productionready.io/api/articles')
    }

    saveArticle(articleValues:IArticle,authorizationToken):Observable<IArticle>{

        let options = {headers:new HttpHeaders({'Content-Type':'application/json','Authorization': `Token ${authorizationToken}`})}

        let article = {
            article: {
              title: articleValues.title,
              description: articleValues.description,
              body: articleValues.body,
              tagList: []
            }
          }
          console.log('sent article')
          console.log(article)

       return this.http.post<IArticle>('https://conduit.productionready.io/api/articles',article,options)
    }

    getArticle(slug:string):Observable<IArticle>{

        let options = {headers:new HttpHeaders({'Content-Type':'application/json'})}

          let url = 'https://conduit.productionready.io/api/articles/'+slug

          return this.http.get<IArticle>(url,options)
    }

    updateArticle(articleValues:any,authorizationToken:string):Observable<IArticle>{
        let options = {headers:new HttpHeaders({'Content-Type':'application/json','Authorization': `Token ${authorizationToken}`})}

        let article = {
            article: {
              title: articleValues.article.title,
              description: articleValues.article.description,
              body: articleValues.article.body,
              tagList: []
            }
          }

          let slug = articleValues.article.slug

          let url = 'https://conduit.productionready.io/api/articles/'+slug

          return this.http.put<IArticle>(url,article,options)


    }

    getFeed(authorizationToken:string){
        let options = {headers:new HttpHeaders({'Content-Type':'application/json','Authorization': `Token ${authorizationToken}`})}
        let url = 'https://conduit.productionready.io/api/articles/feed'
        return this.http.get<IArticles>(url,options)
    }

    getMyArticles(username:string){
            let author = username             
            let url = 'https://conduit.productionready.io/api/articles?author='+author
            return this.http.get<IArticles>(url);            
    }

    deleteArticle(slug){
        let authorizationToken = this.authenticationTokenService.getToken()
       // console.log(authorizationToken)
        let options = {headers:new HttpHeaders({'Content-Type':'application/json','Authorization': `Token ${authorizationToken}`})}
        let url = 'https://conduit.productionready.io/api/articles/'+slug
       // console.log(url)
        return this.http.delete(url,options)

    }

}