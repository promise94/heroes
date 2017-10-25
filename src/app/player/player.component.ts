import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';
// headerTitle服务
import { TitleService } from '../server/title.service';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.less'],
  animations: [slideInDownAnimation],
})
export class PlayerComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  constructor(private titleserver: TitleService) { }

  ngOnInit() {
    this.titleserver.titleChange.emit('搜索');
  }

}
