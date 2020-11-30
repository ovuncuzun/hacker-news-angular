import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { HackerNewsService } from './hacker-news.service';

describe('HackerNewsService', () => {
  const httpClientMock = jasmine.createSpyObj('HttpClient', ['get']);
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: HttpClient, useValue: httpClientMock },
    ]
  }));

  let service: HackerNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HackerNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getStoriesByType should get stories from hackernews api', () => {
    const service: HackerNewsService = TestBed.inject(HackerNewsService);
    httpClientMock.get.and.returnValue(new Observable((o) => { o.next([123]); }));
    service.getStoriesByType('new').subscribe((data) => {
      expect(data).toEqual([123]);
    });
  });

  it('#getStory should get story from hackernews api', () => {
    const service: HackerNewsService = TestBed.inject(HackerNewsService);
    httpClientMock.get.and.returnValue(new Observable((o) => { o.next({ title: 'test', url: 'https://www.google.com', score: 100, by: 'testuser', time: 789 }); }));
    service.getStory(123).subscribe((data) => {
      expect(data).toEqual({ title: 'test', url: 'https://www.google.com', score: 100, by: 'testuser', time: 789 });
    });
  });
});

