import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';
// headerTitle服务
import { TitleService } from '../server/title.service';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.less'],
  animations: [slideInDownAnimation],
})
export class GameComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  constructor(private titleserver: TitleService) { }

  ngOnInit() {
    this.titleserver.titleChange.emit('对局');
  }

}
