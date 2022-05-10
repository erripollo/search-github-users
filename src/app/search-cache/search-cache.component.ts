import { Component, OnInit } from '@angular/core';

import { UsersService } from '../services/users.service';
import { CacheService } from '../services/cache.service';

@Component({
  selector: 'app-search-cache',
  templateUrl: './search-cache.component.html',
  styleUrls: ['./search-cache.component.css']
})
export class SearchCacheComponent implements OnInit {
  searchesCache: string[] = []

  constructor(private cacheService: CacheService) { }

  ngOnInit(): void {
    this.getSearchesCache()
  }

  getSearchesCache(){
    this.searchesCache = this.cacheService.getSearchesCache()
  }

}
