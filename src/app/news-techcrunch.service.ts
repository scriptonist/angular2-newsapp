import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class NewsTechcrunchService {

  constructor(private http:Http,
    
  ) { 
    
  }

  getTechcrunchNews(publication:string){
    
    return this.http.get('https://newsapi.org/v1/articles?source='+publication+'&sortBy=top&apiKey=266809769f7746bd8129a950adf53046')
    .map((res:Response)=>res.json())

  }

}
