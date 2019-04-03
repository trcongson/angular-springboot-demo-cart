import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse } from '../entities/login.response';

@Injectable()
export class LoginService {
    constructor(private http: HttpClient) {}
    baseUrl: string = 'http://localhost:8080/users/';

    login(loginPayload) : Observable<LoginResponse> {
        return this.http.post<LoginResponse>('http://localhost:8080/' + 'token/generate-token', loginPayload);
      }
    getUsers() : Observable<LoginResponse> {
        return this.http.get<LoginResponse>(this.baseUrl);
      }
    
      getUserById(id: number): Observable<LoginResponse> {
        return this.http.get<LoginResponse>(this.baseUrl + id);
      }
}