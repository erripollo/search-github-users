import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor() { }

  /**
   * ## Save search data in localStorage
   * Save in localStorage the searches done and their results
   * 
   * @param {object} value results of the research done  
   */
  saveUsersInLocalStorage(value: object) {
    // Get a index saved in the cache to assign it at users data
    var index: any = localStorage.getItem('index');

    // transform the json to string because the localStorage accept only string data
    const usersToString = JSON.stringify(value);
    localStorage.setItem(index, usersToString);

    // increment and save index in localStorage
    index++
    localStorage.setItem('index', index);
  }

  /**
   * ## Get cache data
   * Get from cache all searches done
   * @returns array of object with all searches done
   */
  getSearchesCache(){
    const searchesCache = [];
    const cache = Object.keys(localStorage).filter(el => el != 'index').sort().reverse();
    for (let i = 0; i < cache.length; i++) {
      const element = cache[i];
      const usersJsonString: any = localStorage.getItem(element);
      const usersJson = JSON.parse(usersJsonString);
      searchesCache.push(usersJson);
    }
    return searchesCache;
  }


}
