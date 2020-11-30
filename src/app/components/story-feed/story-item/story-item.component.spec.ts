import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UrlPipe } from 'src/app/pipes/url.pipe';
import { MatCardModule } from '@angular/material/card';

import { StoryItemComponent } from './story-item.component';

describe('StoryItemComponent', () => {
  let component: StoryItemComponent;
  let fixture: ComponentFixture<StoryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCardModule],
      declarations: [StoryItemComponent, UrlPipe]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display story details correctly', () => {
    component.story = { title: 'test', url: 'https://www.google.com', score: 100, by: 'testuser', time: '123' };
    fixture.detectChanges();
    const nativeElement: HTMLElement = fixture.nativeElement;
    const title = nativeElement.querySelector('mat-card-title')!.textContent;
    const subtitle = nativeElement.querySelector('mat-card-subtitle')!.textContent;
    const url = nativeElement.querySelector('mat-card-subtitle:last-child')!.textContent;
    expect(title).toContain('test');
    expect(subtitle).toContain('100 points by testuser');
    expect(url).toContain('google.com');
  });
});
