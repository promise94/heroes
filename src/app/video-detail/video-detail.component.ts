import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VideoService } from '../server/video.service'; // 视频服务
import { TitleService } from '../server/title.service';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.less'],
  providers: [VideoService],
})
export class VideoDetailComponent implements OnInit {

  constructor(
    private videoServer: VideoService, // 视频服务
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private titleServer: TitleService, // 顶部title修改服务
  ) { }

  private video;
  private src: SafeResourceUrl;
  private height: number;
  ngOnInit() {
    this.height = (window.innerHeight / 100 - 1.5);
    this.route.params.subscribe((param: Params) => {
      this.video = this.videoServer.getVideo(+param.id);
      this.src = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.url);
      this.titleServer.titleChange.emit(this.video.title)
    })
  }

}
