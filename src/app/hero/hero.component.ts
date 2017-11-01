import { Component, OnInit, HostBinding, AfterViewChecked } from '@angular/core';
import { slideInDownAnimation } from '../animations';
import { Router } from '@angular/router';

import { AppService } from '../server/app.service';
// headerTitle服务
import { TitleService } from '../server/title.service';

import { Hero } from '../hero';

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

  private heros: Hero[];
  // private flexBasis: any = 0.6;

  ngOnInit() {
    this.titleserver.titleChange.emit('英雄列表');
    this.server.getHeros().then(data => {
      this.heros = data;
    });
  }
  
  ngAfterViewChecked(){
    // this.flexBasis = 0.605;
  }
  goHeroDetail(id) {
    this.router.navigate(['main/herodetail', id]);
  }
}
