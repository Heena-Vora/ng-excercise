import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { tap, map } from "rxjs/operators";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  private prepareResponse(response: Response): any {
    if (response.status === 204) {
      return undefined;
    } else {
      return response;
    }
  }

  getUsersList() {
    const headerDict = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Headers": "Content-Type"
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };

    return this.http
      .get("https://randomuser.me/api/?results=20", requestOptions)
      .pipe(map(this.prepareResponse));
  }
}
