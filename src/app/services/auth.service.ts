import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { switchMap } from 'rxjs/operators';
import {TokenService} from '@services/token.service';
import { ResponseLogin } from '@models/auth.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl=environment.API_URL;
  constructor(
    private http:HttpClient,
    private tokenService: TokenService
  ) { }

  login(email:string, password:string){
    return this.http.post<ResponseLogin>(`${this.apiUrl}/api/v1/auth/login`,{
      email,
      password
    })
    .pipe(
      tap(response =>{
        this.tokenService.saveToken(response.access_token)
      }
      )
    )
  }

  register(name:string, email:string, password:string){
    return this.http.post(`${this.apiUrl}/api/v1/auth/register`,{
      name,
      email,
      password
    });
  }

  registerAndLogin(name:string,email:string,password:string){
    return this.register(name,email,password)
    .pipe(
      switchMap(()=>this.login(email,password))
    )
  }

  isAvalable(email:string){
    return this.http.post<{isAvailable:boolean}>(`${this.apiUrl}/api/v1/auth/is-available`,{email});
  }

  recovery(email:string){
    return this.http.post(`${this.apiUrl}/api/v1/auth/recovery`,{email});
  }

  changePassword(token: string, newPassword: string) {
    return this.http.post(`${this.apiUrl}/api/v1/auth/change-password`,{token,newPassword});
  }
}
