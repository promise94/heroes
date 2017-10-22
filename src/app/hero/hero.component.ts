import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.less']
})
export class HeroComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }
  goHeroDetail(id) {
    this.router.navigate(['main/herodetail', id]);
  }
}
