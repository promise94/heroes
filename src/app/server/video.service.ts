import { Injectable, EventEmitter } from '@angular/core';
// video 数据
import { videoList } from '../../data/videolist';
@Injectable()
export class VideoService {
  constructor() { }
  getVideos(): Array<object> { // 视频列表
    return videoList;
  }
  getVideo(id: number) {
    let guid = id + '';
    return videoList.find((item:any):boolean=>{
      return item.guid == guid;
    });
  }
}