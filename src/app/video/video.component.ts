import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router'; // 路由
import { slideInDownAnimation } from '../animations';
import { VideoService } from '../server/video.service';

// title 服务
import { TitleService } from '../server/title.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.less'],
  animations: [slideInDownAnimation],
  providers: [VideoService],
})
export class VideoComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  constructor(
    private server: VideoService, // 注入视频服务
    private titleServer: TitleService, // 注入title服务(更改顶部title的值)
    private router: Router, // 注入路由
  ) { }

  private videoList: Array<object>; // 视频列表
  ngOnInit() {
    this.titleServer.titleChange.emit('最新视频')
    this.videoList = this.server.getVideos();
  }

  showVideo(id: number): void { // 查看视频
    console.log()
    // this.router.routerState.root.children[0].routeConfig.children.forEach(element => {
    //   if (/videodetail/.test(element.path)) {
    //     if (element.data.hasOwnProperty('url')) {
    //       element.data.url = content;
    this.router.navigate(['main/videodetail', id])
    //     }
    //   }
    // });
  }
}
