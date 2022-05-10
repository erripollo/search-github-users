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

  /**
   * ## Save research data in localStorage
   * Save in localStorage the researches done and their results
   * 
   * @param {string} key name from the research done
   * @param {object} value results of the research done  
   */
  saveUsersInLocalStorage(key: string, value: object) {
    // transform the json to string because the localStorage accept only string data
    const usersJson = JSON.stringify(value)
    localStorage.setItem(key, usersJson);
    //console.log(Object.keys(localStorage));
  }

  getSearchesCache(){
    return Object.keys(localStorage)
  }
}
