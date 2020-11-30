import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryFeedComponent } from './story-feed.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('StoryFeedComponent', () => {
  let component: StoryFeedComponent;
  let fixture: ComponentFixture<StoryFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoryFeedComponent],
      imports: [MatToolbarModule, MatProgressBarModule, MatCardModule, HttpClientModule, RouterTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
