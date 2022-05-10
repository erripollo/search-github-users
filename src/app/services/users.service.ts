import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = 'https://api.github.com/search/users'

  constructor(private http: HttpClient) { }
  
  /**
   * GET users from the github api
   * 
   * @param {string} keyword the word with which to search users
   * @returns json of users which contain the keyword
   */
  getUsers(keyword: string): Observable<Users>{
    return this.http.get<Users>(`${this.url}?q=${keyword}`)
  }
}
