import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.less'],
  animations: [slideInDownAnimation],
})
export class HeroComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

  constructor(private router: Router) { }

  ngOnInit() { }
  goHeroDetail(id) {
    this.router.navigate(['main/herodetail', id]);
  }
}
