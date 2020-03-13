import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserStatusService {

        private statusObject = new BehaviorSubject<any>(false);
        loginState = this.statusObject.asObservable();

        constructor() { }

        login() {
                this.statusObject.next({ login: true });
        }
        logout() {
                this.statusObject.next({ login: false });
        }
        getStatus() {
          return this.loginState;
        }
}
