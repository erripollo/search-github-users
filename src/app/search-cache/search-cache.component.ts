import { Component, OnInit } from '@angular/core';

import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-search-cache',
  templateUrl: './search-cache.component.html',
  styleUrls: ['./search-cache.component.css']
})
export class SearchCacheComponent implements OnInit {
  searchesCache: string[] = []

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getSearchesCache()
  }

  getSearchesCache(){
    this.searchesCache = this.usersService.getSearchesCache()
  }

}
