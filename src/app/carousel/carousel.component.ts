import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less']
})
export class CarouselComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() list;
  private config: Object;
  private index: number = 0;

  ngOnInit() {
    let num = this.list.length;
    this.config = {
      initialSlide: 0,
      speed: 1500,
      autoplay: 1500,
      autoplayDisableOnInteraction: false,
      pagination: '.swiper-pagination',
      // loopedSlides: num,
      // loopAdditionalSlides: 1,
      // loop: true
    }
  }

  swiperChange(event) {

  }

  goDetail(url, title) {
    this.router.navigate(['main/newdetail', url, { title }]);
  }
}
