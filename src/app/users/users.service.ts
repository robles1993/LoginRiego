import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
// import { Observable } from "rxjs/Observable";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient) {}

  login(user:any): Observable<any> {
    // return this.http.post("http://localhost:8080/api/login", user);
    return this.http.post("http://localhost:8080/auth/login",user);

  }

  register(user:any): Observable<any> {
    return this.http.post("https://reqres.in/api/register", user);
  }
}