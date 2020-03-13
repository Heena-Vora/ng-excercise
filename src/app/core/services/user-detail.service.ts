import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class UserDetailService {
  private detailObject = new Subject<any>();
  detail = this.detailObject.asObservable();

  constructor() {}

  setDetail(data) {
    this.detailObject.next(data);
  }
  getDetail() {
    return this.detail;
  }
}
