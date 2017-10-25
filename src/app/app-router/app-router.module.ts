import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 组件引入
import { AppComponent } from '../app.component'; // 程序壳
import { IndexComponent } from '../index/index.component'; // 欢迎页
import { MainComponent } from '../main/main.component'; // 页面框架
import { NewsComponent } from '../news/news.component'; // 资讯列表
import { NewsDetailComponent } from '../news-detail/news-detail.component'; // 资讯详情
import { PlayerComponent } from '../player/player.component'; // 玩家搜索
import { HeroComponent } from '../hero/hero.component'; // 英雄列表
import { VideoComponent } from '../video/video.component'; // 视频
import { PlayerDetailComponent } from '../player-detail/player-detail.component'; // 玩家详情
import { GameComponent } from '../game/game.component'; // 对局
import { HeroDetailComponent } from '../hero-detail/hero-detail.component'; // 英雄详情
import { VideoDetailComponent } from '../video-detail/video-detail.component'; // 视频详情
import { Page404Component } from '../page404/page404.component'; // 404

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
      { path: 'videodetail/:id', component: VideoDetailComponent, data:{url:'sfsdfsd'}},
    ]
  },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: '**', component: Page404Component },
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTERS)],
  exports: [RouterModule],
  declarations: []
})
export class AppRouterModule { }
