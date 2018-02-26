import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component'; // add friend or group

// seems useless to place routing here..
// could not access config here
const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [ 
     {
        path: '',
        component: EditComponent,
      }, {
        path: 'edit',
        component: EditComponent,
      } , {
        path: 'add',
        component: AddComponent
      }
    ]  
 }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class UserRoutingModule { }
