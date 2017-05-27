import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class NewsTechcrunchService {

  constructor(private http:Http,
    
  ) { 
    
  }

  getTechcrunchNews(publication:string){
    
    return this.http.get('https://newsapi.org/v1/articles?source='+publication+'&sortBy=top&apiKey=2c6d959664414eea8838182506044b22')
    .map((res:Response)=>res.json())

  }

}
