import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
})
export class MainComponent implements OnInit {
  constructor(
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
  ) { } // 构造函数

  private title = '资讯';

  LINK: Array<Link> = [ // 底部导航栏
    { name: '资讯', path: './news', icon: 'icon-new' },
    { name: '玩家', path: './player', icon: 'icon-player' },
    { name: '英雄', path: './hero', icon: 'icon-medal' },
    { name: '视频', path: './video', icon: 'icon-video' },
  ]
  // 初始化时
  ngOnInit(): void {

  }
  ngAfterContentChecked(): void {
    // console.log('afterContent', this.router);
  }
  // 事件处理
  selectedItem(item): void { // 设置头部导航条title
    this.title = item.name;
  }
  goBack(): void { // 返回上一步
    this.location.back();
  }

}

class Link {
  name: string;
  path: string;
  icon: string;
}