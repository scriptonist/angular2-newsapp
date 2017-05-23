import { Component,OnInit } from '@angular/core';
import {NewsTechcrunchService} from './news-techcrunch.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private techcrunch:NewsTechcrunchService){}
  latest_news = {};
  loadNews(){
    this.techcrunch.getTechcrunchNews().subscribe(data => this.latest_news = data)
  }
  title = 'News App';
  ngOnInit(): void {
   this.loadNews(); 
  }
}
