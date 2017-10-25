import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';
import { Router } from '@angular/router';
import { AppService } from '../server/app.service';

// headerTitle服务
import { TitleService } from '../server/title.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less'],
  animations: [slideInDownAnimation],
})
export class NewsComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  constructor(
    private router: Router,
    private appserver: AppService,
    private titleserver: TitleService
  ) { }

  private bannerNew;
  private newsList;

  ngOnInit() {
    this.titleserver.titleChange.emit('资讯');
    this.bannerNew = this.appserver.getBanner();
    this.newsList = this.appserver.getNews();
  }

  goDetail(url, title) { // 查看资讯详情
    this.router.navigate(['main/newdetail', url, { title }]);
  }
}
