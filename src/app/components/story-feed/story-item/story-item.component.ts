import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-item',
  templateUrl: './story-item.component.html',
  styleUrls: ['./story-item.component.scss']
})
export class StoryItemComponent implements OnInit {
  @Input() story: any;

  constructor() { }

  ngOnInit(): void {
  }

}
