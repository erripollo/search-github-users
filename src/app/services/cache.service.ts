import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor() { }

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
