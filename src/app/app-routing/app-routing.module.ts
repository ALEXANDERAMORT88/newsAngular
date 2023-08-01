import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes} from '@angular/router';
import { HomeComponent} from '../views/home/home.component'
import {NewsComponent } from '../views/news/news.component'

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'new-news', component: NewsComponent},
]

@NgModule({
  declarations: [],
  imports:
  [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
