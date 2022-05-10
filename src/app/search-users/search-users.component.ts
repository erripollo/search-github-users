import { Component, OnInit } from '@angular/core';

import { UsersService } from '../services/users.service';
import { CacheService } from '../services/cache.service';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {
  searchedUser: string = '';
  users?: any[] = [];
  isLoading: boolean = false
  index: any= ''

  constructor(private usersService: UsersService, private cacheService: CacheService) { }

  ngOnInit(): void {
    this.setIndexInCache();
  }

  /**
   * Pass the searched user at the service and return a list of users,
   * and save the data in localStorage troughth the usersService.
   * If the data are in the cache get it from cache
   * 
   * @param {string} keyword the word with which to search users
   */
  onSearch(keyword: string): void{
    const keywordToLowercase = keyword.toLowerCase();
    this.isLoading = true;
    this.users = [];
    // check if the keyword is in the cache
    const searchesCache = this.cacheService.getSearchesCache();
    const filteredCache = searchesCache.filter(el => el.cache == keywordToLowercase);
    // if the keyword is in the cache get the data from it
    if (filteredCache.length > 0) {
      this.users = filteredCache[0].items
      this.isLoading = false;
    }
    // else if the keyword is a empty string don't get results
    else if (keywordToLowercase.length < 1) {
      this.users = undefined
      this.isLoading = false;
    }
    // else get the data from the server
    else {
      this.usersService.getUsers(keywordToLowercase)
        .subscribe((users) => {
          if (users.items.length > 0) {
            this.users = users.items;
            const usersForCache: any = users;
            usersForCache.cache = keywordToLowercase;
            this.cacheService.saveUsersInLocalStorage(usersForCache)
          }
          else {
            this.users = undefined
          }
          this.isLoading = false;
        })
    }
  }

  setIndexInCache() {
    if (!localStorage.getItem('index')) {
      this.index = '0'
      localStorage.setItem('index', this.index)
    }
  }

}
