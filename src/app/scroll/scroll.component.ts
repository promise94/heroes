import { Component, OnInit, Input, Output, OnChanges, AfterContentInit, EventEmitter, ElementRef, ViewChild, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.less']
})
export class ScrollComponent implements OnInit, OnChanges {

  Info: any;
  @Input('Percentage') _Percentage: number;
  @Input('IsRefreshFinish') _IsRefreshFinish: boolean;
  @Input('IsNextPageFinish') _IsNextPageFinish: boolean;
  @Input('IsSlideLeftFinish') _IsSlideLeftFinish: boolean;
  @Input('IsSlideRightFinish') _IsSlideRightFinish: boolean;
  @Output('onRefresh') _onRefresh: EventEmitter<any> = new EventEmitter();
  @Output('onNextPage') _onNextPage: EventEmitter<any> = new EventEmitter();
  @Output('onSlideLeft') _onSlideLeft: EventEmitter<any> = new EventEmitter();
  @Output('onSlideRight') _onSlideRight: EventEmitter<any> = new EventEmitter();

  @ViewChild('divTop') divTop: ElementRef;
  @ViewChild('divContent') divContent: ElementRef;
  @ViewChild('divBottom') divBottom: ElementRef;

  Top50Name: any;

  constructor() {
    this.Info = {
      Start: { X: 0, Y: 0 },
      Move: { X: 0, Y: 0 },
      End: { X: 0, Y: 0 },
      TitleTop: '下拉刷新',
      TitleBottom: '上拉获取数据',
    };
  }

  ngOnInit() { // 组件初始化
  }

  ngOnChanges() {
    if (!!this._IsRefreshFinish) {
      const { Info, divTop } = this;
      Info.TitleTop = '更新完成。。。';
      setTimeout(() => {
        divTop.nativeElement.style.height = '0px';
        setTimeout(() => {
          divTop.nativeElement.style.display = 'none';
          Info.TitleTop = '下拉刷新。。。';
          delete Info.IsTitleTop;
        }, 500);
      }, 500);
    }
    if (!!this._IsNextPageFinish) {
      const { Info, divBottom } = this;
      Info.TitleBottom = '加载完成。。。';
      setTimeout(() => {
        divBottom.nativeElement.style.height = '0px';
        setTimeout(() => {
          divBottom.nativeElement.style.display = 'none';
          Info.TitleTop = '下拉刷新。。。';
          delete Info.IsTitleTop;
        }, 500);
      }, 500);
    }
  }

  __UpdateLocation(type, event) {
    const { changedTouches } = event;
    const { clientX, clientY } = changedTouches[0];
    this.Info[type].X = clientX;
    this.Info[type].Y = clientY;
  }

  OnTouchStart(event) {
    this.__UpdateLocation('Start', event);
  }

  OnTouchMove(event) {
    this.__UpdateLocation('Move', event);
  }

  ontouchend(event) {
    this.__UpdateLocation('End', event);
    this.__RefreshOrNextPageEnd();
    const { Start, End, divTop, divBottom } = this.Info;

    const xes = End.X - Start.X;
    const yes = End.Y - Start.Y;

    const absXes = Math.abs(xes);
    const absYes = Math.abs(yes);

    if (absXes < 10 && absYes < 20) {
      this.__Reset();
      return;
    }

    if (xes > 0) {
      // 右
      if (yes > 0) {
        // 向下
        // 判断主向
        if (absXes > absYes) {
          // 向右
          this.SlideRight();
        } else {
          // 向下
          this.SlideRefresh();
        }
      } else {
        // 向上
        if (absXes > absYes) {
          // 向右
          this.SlideRight();
        } else {
          // 向上
          this.SlideNextPage();
        }
      }
    } else {
      // 左边
      if (yes > 0) {
        // 向下
        if (absXes > absYes) {
          // 向左
          this.SlideLeft();
        } else {
          // 向下
          this.SlideRefresh();
        }
      } else {
        // 向上
        if (absXes > absYes) {
          this.SlideLeft();
        } else {
          this.SlideNextPage();
        }
      }
    }
  }

  __Reset() {
    const { divTop, divBottom, Info } = this;
    divTop.nativeElement.style.height = '0px';
    divBottom.nativeElement.style.height = '0px';
    divTop.nativeElement.style.display = 'none';
    divBottom.nativeElement.style.display = 'none';
    Info.TitleTop = '下拉刷新';
    Info.TitleBottom = '上拉获取数据';
  }

  SlideLeft() {
    const { _onSlideLeft } = this;
    if (!_onSlideLeft) {
      return;
    }
    _onSlideLeft.emit();
  }

  SlideRight() {
    const { _onSlideRight } = this;
    if (_onSlideRight) {
      return;
    }
    _onSlideRight.emit();
  }

  SlideNextPage() {
    const { _onNextPage, _Percentage, Info, divBottom } = this;
    if (!_onNextPage) {
      return;
    }
    const __ctrl = document.body.children[0].children[1];
    const { scrollTop, scrollHeight } = __ctrl;

    const __bodyScrollTop = scrollTop;
    const __bodyScrollHeight = scrollHeight;
  }
}
