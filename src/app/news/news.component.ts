import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';
import { Router } from '@angular/router';

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
    private router: Router
  ) { }

  ngOnInit() { }

  goDetail(id) { // 查看资讯详情
    this.router.navigate(['main/newdetail', id]);
  }
}
