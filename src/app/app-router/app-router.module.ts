import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 组件引入
import { AppComponent } from '../app.component';
import { IndexComponent } from '../index/index.component';
import { MainComponent } from '../main/main.component';
import { NewsComponent } from '../news/news.component';
import { NewsDetailComponent } from '../news-detail/news-detail.component';
import { PlayerComponent } from '../player/player.component';
import { HeroComponent } from '../hero/hero.component';
import { VideoComponent } from '../video/video.component';
import { PlayerDetailComponent } from '../player-detail/player-detail.component';
import {GameComponent} from '../game/game.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

const ROUTERS: Routes = [
  { path: 'index', component: IndexComponent },
  {
    path: 'main', component: MainComponent, children: [
      { path: '', redirectTo: 'news', pathMatch: 'full' },
      { path: 'news', component: NewsComponent },
      { path: 'player', component: PlayerComponent },
      { path: 'hero', component: HeroComponent },
      { path: 'video', component: VideoComponent },
      { path: 'newdetail/:id', component: NewsDetailComponent },
      { path: 'playerdetail/:id', component: PlayerDetailComponent },
      { path: 'game/:id', component: GameComponent },
      { path: 'herodetail/:id', component: HeroDetailComponent },
    ]
  },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTERS)],
  exports: [RouterModule],
  declarations: []
})
export class AppRouterModule { }
