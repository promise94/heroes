import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

// header修改title服务
import { TitleService } from '../server/title.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
  providers: [TitleService]
})
export class MainComponent implements OnInit {
  constructor(
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private titleserver: TitleService
  ) { } // 构造函数

  private title: string; // 顶部header name值

  LINK: Array<Link> = [ // 底部导航栏
    { name: '资讯', path: './news', icon: 'icon-new' },
    { name: '玩家', path: './player', icon: 'icon-player' },
    { name: '英雄', path: './hero', icon: 'icon-medal' },
    { name: '视频', path: './video', icon: 'icon-video' },
  ]
  // 初始化时
  ngOnInit(): void {
    this.titleserver.titleChange.subscribe((title => this.title = title)); // 订阅titleChange事件产生的流    
  }
  ngAfterContentChecked(): void {
    // console.log('afterContent', this.router);
  }
  // 事件处理
  selectedItem(item): void { // 导航选中事件
    //   this.title = item.name;
  }
  goBack(): void { // 返回上一步
    this.location.back();
  }

  nextPage() { // 加载下一页
    console.log('nextPage')
  }

  refresh() { // 刷新
    console.log('refresh');
  }

  slideLeft() {
    console.log('slideLeft');
  }

  slideRight() {
    console.log('slideRight');
  }
}

class Link {
  name: string;
  path: string;
  icon: string;
}