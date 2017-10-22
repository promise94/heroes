import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // 转场动画


import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { MainComponent } from './main/main.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { PlayerComponent } from './player/player.component';
import { HeroComponent } from './hero/hero.component';
import { VideoComponent } from './video/video.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { GameComponent } from './game/game.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
// 路由模块
import { AppRouterModule } from './app-router/app-router.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MainComponent,
    NewsComponent,
    NewsDetailComponent,
    PlayerComponent,
    HeroComponent,
    VideoComponent,
    CarouselComponent,
    PlayerDetailComponent,
    GameComponent,
    HeroDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
