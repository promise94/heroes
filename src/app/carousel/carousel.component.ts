import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less']
})
export class CarouselComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() list;

  @ViewChild('carousel') carousel: ElementRef;

  private config: Object = {
    initialSlide: 0,
    speed: 1500,
    autoplay: 1500,
    autoplayDisableOnInteraction: false,
    pagination: '.swiper-pagination',
    loop: true,
    loopedSlides: 4,
    loopAdditionalSlides: 1,
    observer: true, // 修改swiper自己或子元素时，自动初始化swiper
    observeParents: true, // 修改swiper的父元素时，自动初始化swiper
  };
  private index: number = 0;

  ngOnInit() {
    // let num = this.list.length;
    // this.config = 
  }

  goDetail(url, title) {
    this.router.navigate(['main/newdetail', url, { title }]);
  }
}