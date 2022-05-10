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
    if (!localStorage.getItem('index')) {
      this.index = '0'
      localStorage.setItem('index', this.index)
      console.log('inizializzazione index = ', localStorage.getItem('index'));
      
    }
  }

  /**
   * Pass the searched user at the service and return a list of users,
   * and save the data in localStorage troughth the usersService 
   * 
   * @param {string} keyword the word with which to search users
   */
  onSearch(keyword: string): void{
    this.isLoading = true;
    this.users = [];
    this.usersService.getUsers(keyword)
      .subscribe((users) => {
        console.log(users);
        if (users.items.length > 0) {
          this.users = users.items;
          const usersForCache: any = users;
          usersForCache.cache = keyword;
          this.cacheService.saveUsersInLocalStorage(usersForCache)
        }
        else {
          this.users = undefined
        }
        this.isLoading = false;
      })
  }

}
