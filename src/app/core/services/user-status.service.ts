import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class UserStatusService {

        private statusObject = new Subject<any>();
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
