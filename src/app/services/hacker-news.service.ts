import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://hacker-news.firebaseio.com/v0/';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {

  constructor(private http: HttpClient) { }

  getStoriesByType(storyType: any) {
    return this.http.get(`${BASE_URL}${storyType}stories.json`);
  }

  getStory(storyId: number) {
    return this.http.get(`${BASE_URL}item/${storyId}.json`);
  }
}
