import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  UserLoggedIn$:BehaviorSubject<boolean> = new BehaviorSubject(true);
  isUserLoggedIn():Observable<boolean>{
    return this.UserLoggedIn$.asObservable();
  }
}
