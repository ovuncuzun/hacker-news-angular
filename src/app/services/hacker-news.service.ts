import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { formatDistanceToNow } from 'date-fns';
import { map } from 'rxjs/operators';
import { Story } from '../interfaces/story';

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
    return this.http.get(`${BASE_URL}item/${storyId}.json`).pipe(
      map(data => {
        const storyItem = data as Story;
        if (data) {
          storyItem.time = this.formatTime(Number(storyItem.time))
        }
        return storyItem;
      })
    );
  }

  formatTime(timespan: number): string {
    const date = new Date(1000 * timespan);
    return formatDistanceToNow(date) + ' ago';
  }
}
