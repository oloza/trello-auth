import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import {TokenService} from '@services/token.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl = environment.API_URL;

  constructor(
    private http:HttpClient,
    private tokenService: TokenService
  ) { }

  getUsers() {
    return this.http.get(`${this.apiUrl}/api/v1/users`);
  }


}
