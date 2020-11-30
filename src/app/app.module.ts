import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoryFeedComponent } from './components/story-feed/story-feed.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StoryItemComponent } from './components/story-feed/story-item/story-item.component';
import { UrlPipe } from './pipes/url.pipe';
import { HackerNewsService } from './services/hacker-news.service';

@NgModule({
  declarations: [
    AppComponent,
    StoryFeedComponent,
    StoryItemComponent,
    UrlPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatToolbarModule

  ],
  providers: [HackerNewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
