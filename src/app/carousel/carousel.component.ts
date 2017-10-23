import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  @Input() list;
  private config: Object;

  ngOnInit() {
    let num = this.list.length;
    this.config = {
      initialSlide: -1,
      speed: 1500,
      autoplay: 1500,
      autoplayDisableOnInteraction: false,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        bulletElement: 'span'
      },
      loopedSlides: num,
      loopAdditionalSlides: 1,
      loop: true
    }
  }

  swiperChange(event) {
    console.log('change', event)
  }
}
