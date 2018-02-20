import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';

// import components
const routes: Routes = [
  {
    path: '', redirectTo: 'main', pathMatch: 'full'
  }, {
    // path: 'main', component: MainComponent // 好像不能使用懒加载
    path: 'main', loadChildren: 'app/main/main.module#MainModule'
  }, {
    path: '**', component: NotFoundComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
