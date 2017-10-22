import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.less']
})
export class HeroDetailComponent implements OnInit {
  constructor() { }

  private tabSelectIndex: number = 1; // 卡片切换下标
  ngOnInit() { }
  tabTagger(index){ // 卡片切换
    this.tabSelectIndex = index;
  }
}
