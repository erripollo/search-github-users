import { Component, OnInit } from '@angular/core';

import { CacheService } from '../services/cache.service';

@Component({
  selector: 'app-search-cache',
  templateUrl: './search-cache.component.html',
  styleUrls: ['./search-cache.component.css']
})
export class SearchCacheComponent implements OnInit {
  searchesCache: any[] = []

  constructor(private cacheService: CacheService) { }

  ngOnInit(): void {
    this.getSearchesCache()
  }

  /**
   * Get the data saved in the localStorage
   */
  getSearchesCache(){
    const cache = this.cacheService.getSearchesCache().filter(el => el != 'index').sort().reverse()
    for (let i = 0; i < cache.length; i++) {
      const element = cache[i];
      const usersJsonString: any = localStorage.getItem(element);
      const usersJson = JSON.parse(usersJsonString);
      this.searchesCache.push(usersJson);
    }
  }

  /**
   * Clear the data in localStorage
   */
  clearCache(): void {
    localStorage.clear()
    console.log('ciao');
    
    this.searchesCache = []
  }

}
