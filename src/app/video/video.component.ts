import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';
import { AppService } from '../server/app.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.less'],
  animations: [slideInDownAnimation],
})
export class VideoComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  constructor(private appserver: AppService) { }

  private videoList;
  ngOnInit() {
    this.videoList = this.appserver.getVedio();
  }

}
