import { API_URL } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserInfoResponse } from './models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UserRepository {
  constructor(private http: HttpClient) {}

  public getUserInfo(): Observable<UserInfoResponse> {
    return this.http.get<UserInfoResponse>(`${API_URL}/user/me`);
  }
}
