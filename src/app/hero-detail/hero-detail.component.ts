import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';
// headerTitle服务
import { TitleService } from '../server/title.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.less'],
  animations: [slideInDownAnimation],
})
export class HeroDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  constructor(private titleserver: TitleService) { }

  private tabSelectIndex: number = 1; // 卡片切换下标
  ngOnInit() {
    this.titleserver.titleChange.emit('黑暗之女');
  }
  tabTagger(index) { // 卡片切换
    this.tabSelectIndex = index;
  }
}
