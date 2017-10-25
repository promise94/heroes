import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';
import { Router } from '@angular/router';

import { AppService } from '../server/app.service';
// headerTitle服务
import { TitleService } from '../server/title.service';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.less'],
  animations: [slideInDownAnimation],
})
export class HeroComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

  constructor(private router: Router, private server: AppService, private titleserver: TitleService) { }

  ngOnInit() {
    this.titleserver.titleChange.emit('英雄列表');
    // this.server.getHeros();
  }
  goHeroDetail(id) {
    this.router.navigate(['main/herodetail', id]);
  }
}
