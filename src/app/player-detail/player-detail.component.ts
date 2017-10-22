import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.less']
})
export class PlayerDetailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
  goGame(id){
    this.router.navigate(['main/game', id]);
  }
}
