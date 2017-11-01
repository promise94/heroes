import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // 转场动画
import { HttpModule } from '@angular/http'; // http请求模块

import { SwiperModule, SwiperConfigInterface } from 'ngx-swiper-wrapper'; // swiper模块

import { AppComponent } from './app.component'; // 程序壳
import { IndexComponent } from './index/index.component'; // 欢迎页
import { MainComponent } from './main/main.component'; // 页面框架
import { NewsComponent } from './news/news.component'; // 资讯列表
import { NewsDetailComponent } from './news-detail/news-detail.component'; // 资讯详情
import { PlayerComponent } from './player/player.component'; // 玩家搜索
import { HeroComponent } from './hero/hero.component'; // 英雄列表
import { VideoComponent } from './video/video.component'; // 视频
import { CarouselComponent } from './carousel/carousel.component'; // 轮播图
import { PlayerDetailComponent } from './player-detail/player-detail.component'; // 玩家详情
import { GameComponent } from './game/game.component'; // 对局
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; // 英雄详情
import { ModalComponent } from './modal/modal.component'; // 模态框,(未完成)
import { VideoDetailComponent } from './video-detail/video-detail.component'; // 视频详情
import { Page404Component } from './page404/page404.component'; // 404组件
import { ScrollComponent } from './scroll/scroll.component'; // Scroll
// 路由模块
import { AppRouterModule } from './app-router/app-router.module';

// 总服务
import { AppService } from './server/app.service';

// swiper配置
const SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
}

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
    ScrollComponent,
    PlayerDetailComponent,
    GameComponent,
    ModalComponent,
    VideoDetailComponent,
    Page404Component,
    HeroDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    SwiperModule.forRoot(SWIPER_CONFIG),
    HttpModule,
    AppRouterModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
