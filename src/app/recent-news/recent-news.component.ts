import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute,Params } from '@angular/router';
import { Location } from '@angular/common';

import {NewsTechcrunchService} from '../news-techcrunch.service'
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'recent-news',
  templateUrl: './recent-news.component.html',
  styleUrls: ['./recent-news.component.css']
})
export class RecentNewsComponent implements OnInit {

constructor(
  private techcrunch:NewsTechcrunchService,
  private route:ActivatedRoute,
  private location:Location
  ){}
  latest_news = {};
  loadNews(){
    
    this.route.params
    .switchMap((params: Params) => this.techcrunch.getTechcrunchNews(params['publication']))
    .subscribe(data => this.latest_news = data);
    // this.techcrunch.getTechcrunchNews('wired-de').subscribe(data => this.latest_news = data)
  }
  goBack(): void {
    this.location.back();
  }
  title = 'News App';
  ngOnInit(): void {
   this.loadNews(); 
  }

}
