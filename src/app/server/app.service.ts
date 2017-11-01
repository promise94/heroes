import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { bannerNews } from '../../data/banner';
import { newsList } from '../../data/newslist';

import { Hero } from '../hero';

@Injectable()
export class AppService {
  private Token: string = '434A9-27B9A-2F5AA-9D94F';
  private header = new Headers();

  constructor(private http: Http) {
    this.header.append('DAIWAN-API-TOKEN', this.Token);
  }
  getBanner() { // 资讯页banner
    return bannerNews;
  }
  getNews() { // 资讯列表
    return newsList;
  }

  getPlayer(keyword: string): Promise<any> {
    const url = `/lol-api/UserArea?${keyword}`;
    return this.http.get(url).toPromise()
      .then(response => {
        console.log('response', response);
        return response.json();
      })
  }

  getHeros(): Promise<Hero[]> {
    return this.http.get('/lol-api/champion', { headers: this.header }).toPromise()
      .then(res => {
        // console.log('res', res);
        return res.json().data as Hero[];
      })
  }

  // 请求出错处理函数
  private handleError(error: any): Promise<any> {
    console.log('error', error);
    return Promise.reject(error.message || error);
  }
}