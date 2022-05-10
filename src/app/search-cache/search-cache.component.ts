import { Component, OnInit } from '@angular/core';

import { CacheService } from '../services/cache.service';

@Component({
  selector: 'app-search-cache',
  templateUrl: './search-cache.component.html',
  styleUrls: ['./search-cache.component.css']
})
export class SearchCacheComponent implements OnInit {
  searchesCache: any[] = [];
  usersFromCache: any[] = [];

  constructor(private cacheService: CacheService) { }

  ngOnInit(): void {
    this.getSearchesCache();
  }

  /**
   * Get the data saved in the localStorage troughth the cache service
   */
  getSearchesCache(){
    this.searchesCache = this.cacheService.getSearchesCache();
  }

  /**
   * Clear the data in localStorage
   */
  clearCache(): void {
    localStorage.clear();
    this.searchesCache = [];
  }

  selectUsersFromCache(name: string) {
    this.usersFromCache = this.searchesCache.filter(el => el.cache == name)[0].items;
  }

}
