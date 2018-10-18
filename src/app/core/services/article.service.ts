import {Injectable} from '@angular/core'
import {IArticles, IArticle} from '../models'
import {Observable} from 'rxjs'
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable()
export class ArticleService{
    constructor(private http:HttpClient){

    }
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

       return this.http.post<IArticle>('https://conduit.productionready.io/api/articles',article,options)
    }

    getArticle(slug:string):Observable<IArticle>{

        let options = {headers:new HttpHeaders({'Content-Type':'application/json'})}

          let url = 'https://conduit.productionready.io/api/articles/'+slug

          return this.http.get<IArticle>(url,options)


    }

    updateArticle(articleValues:IArticle,authorizationToken):Observable<IArticle>{
        let options = {headers:new HttpHeaders({'Content-Type':'application/json','Authorization': `Token ${authorizationToken}`})}

        let article = {
            article: {
              title: articleValues.title,
              description: articleValues.description,
              body: articleValues.body,
              tagList: []
            }
          }

          let slug = articleValues.slug

          let url = 'https://conduit.productionready.io/api/articles/'+slug

          return this.http.put<IArticle>(url,article,options)


    }

}