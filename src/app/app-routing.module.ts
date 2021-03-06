import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchUsersComponent } from './search-users/search-users.component';
import { SearchCacheComponent } from './search-cache/search-cache.component';

const routes: Routes = [
  {
    path: 'search',
    component: SearchUsersComponent
  },
  {
    path: 'cache',
    component: SearchCacheComponent
  },
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
