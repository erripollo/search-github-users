import { Component, OnInit } from '@angular/core';

import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {
  searchedUser: string = '';
  users?: any[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  /**
   * Pass the searched user at the service and return a list of users
   * 
   * @param {string} keyword the word with which to search users
   */
  onSearch(keyword: string): void{
    this.usersService.getUsers(keyword)
      .subscribe((users) => {
        console.log(users);
        if (users.items.length > 0) {
          this.users = users.items; 
        }
        else {
          this.users = undefined
        }
      })
  }

}
