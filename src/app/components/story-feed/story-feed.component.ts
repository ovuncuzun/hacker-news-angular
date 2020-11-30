import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { HackerNewsService } from 'src/app/services/hacker-news.service';

@Component({
  selector: 'app-story-feed',
  templateUrl: './story-feed.component.html',
  styleUrls: ['./story-feed.component.scss']
})
export class StoryFeedComponent implements OnInit {
  loading: boolean = false;
  nextStoryIndex = 0;
  moreStoriesAvailable: boolean = false;
  stories: any = [];
  storiesData: any = [];

  constructor(private storiesService: HackerNewsService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.paramMap.subscribe((params) => {
      this.loading = true;
      const storyType = params.get('type');
      this.storiesService.getStoriesByType(storyType).subscribe((storiesData) => {
        this.stories = [];
        this.storiesData = storiesData;
        this.nextStoryIndex = 0;
        this.loadStories();
      });
    });
  }

  loadStories() {
    const storiesList = [];
    this.moreStoriesAvailable = this.nextStoryIndex + 10 < this.storiesData.length;
    if (this.moreStoriesAvailable) {
      for (let i = this.nextStoryIndex; i < this.nextStoryIndex + 10; i++) {
        storiesList.push(
          this.storiesService.getStory(this.storiesData[i])
        );
      }
      this.loading = true;
      forkJoin(storiesList).subscribe((moreStories) => {
        this.stories = [...this.stories, ...moreStories];
        this.loading = false;
        this.nextStoryIndex = this.nextStoryIndex + 10;
      }, () => {
        this.loading = false;
      });
    }
  }

}
