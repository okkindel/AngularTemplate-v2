import { LoginResponse, LoginRequest } from './models';
import { API_URL } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthRepository {
  constructor(private http: HttpClient) {}

  public login(req: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${API_URL}/auth/login`, req);
  }
}
