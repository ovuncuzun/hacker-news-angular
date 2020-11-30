import { Component, Input, OnInit } from '@angular/core';
import { Story } from 'src/app/interfaces/story';

@Component({
  selector: 'app-story-item',
  templateUrl: './story-item.component.html',
  styleUrls: ['./story-item.component.scss']
})
export class StoryItemComponent implements OnInit {
  @Input() story!: Story;

  constructor() { }

  ngOnInit(): void {
  }

  openLink(url: string) {
    if (url) {
      window.open(url);
    }
  }

}
