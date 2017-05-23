import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NewsTechcrunchService } from './news-techcrunch.service';
import { RecentNewsComponent } from './recent-news/recent-news.component'


@NgModule({
  declarations: [
    AppComponent,
    RecentNewsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:':publication',
        component:RecentNewsComponent
      },
      {
        path:"",
        redirectTo:'/techcrunch',
        pathMatch:'full'
      }
    ])
  ],
  providers: [NewsTechcrunchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
