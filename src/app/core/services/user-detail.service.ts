import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class UserDetailService {
  private detailObject = new BehaviorSubject<any>(null);
  detail = this.detailObject.asObservable();

  constructor() {}

  setDetail(data) {
    this.detailObject.next(data);
  }
  getDetail() {
    return this.detail;
  }
}
