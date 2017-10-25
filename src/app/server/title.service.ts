import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class TitleService {
  public titleChange: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
