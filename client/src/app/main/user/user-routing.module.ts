import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { UserComponent } from './user.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component'; // add friend or group
import { EntryComponent } from './entry/entry.component';

// seems useless to place routing here..
// could not access config here
const routes: Routes = [
  {
    path: 'user',
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
      }, {
        path: 'entry',
        component: EntryComponent
      }
    ]  
 }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class UserRoutingModule { }
