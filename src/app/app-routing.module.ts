import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoryFeedComponent } from './components/story-feed/story-feed.component';

const routes: Routes = [
  { path: 'stories/:type', component: StoryFeedComponent },
  { path: '', pathMatch: 'full', redirectTo: 'stories/top' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
