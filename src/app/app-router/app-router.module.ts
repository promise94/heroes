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
import { GameComponent } from '../game/game.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

const ROUTERS: Routes = [
  { path: 'index', component: IndexComponent },
  {
    path: 'main', component: MainComponent, children: [
      { path: '', redirectTo: 'news', pathMatch: 'full' },
      { path: 'news', component: NewsComponent, data: { title: '资讯' } },
      { path: 'player', component: PlayerComponent, data: { title: '搜索' } },
      { path: 'hero', component: HeroComponent, data: { title: '英雄列表' } },
      { path: 'video', component: VideoComponent, data: { title: '最新视频' } },
      { path: 'newdetail/:id', component: NewsDetailComponent, data: { title: '资讯详情' } },
      { path: 'playerdetail/:id', component: PlayerDetailComponent, data: { title: '玩家详情' } },
      { path: 'game/:id', component: GameComponent, data: { title: '对战详情' } },
      { path: 'herodetail/:id', component: HeroDetailComponent, data: { title: '' } },
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
