import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

// import components
const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '', redirectTo: 'main', pathMatch: 'full'
      }, {
        path: 'main', component: MainComponent // 好像不能使用懒加载
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
