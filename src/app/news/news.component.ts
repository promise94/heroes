import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  goDetail(id) { // 查看资讯详情
    this.router.navigate(['main/newdetail', id]);
  }
}
