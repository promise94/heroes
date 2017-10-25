import { Component, OnInit, HostBinding } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // DomSanitizer 服务
import { slideInDownAnimation } from '../animations'; // 动画
import { ActivatedRoute, Params } from '@angular/router'; // 路由

// header Title 服务
import { TitleService } from '../server/title.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.less'],
  animations: [slideInDownAnimation],
})
export class NewsDetailComponent implements OnInit {
  // 路由动画配置
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  // 构造参数
  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private titleServer: TitleService,
  ) { }

  // 参数
  private src: SafeResourceUrl;
  private height: number;
  ngOnInit() {
    this.height = (window.innerHeight / 100 - 1.4);
    this.route.params.subscribe((param: Params) => {
      this.titleServer.titleChange.emit(param.title);
      this.src = this.sanitizer.bypassSecurityTrustResourceUrl(param.id);
    })
  }

}
