import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { MainComponent } from './main.component';
import { ContentComponent } from './content/content.component';
import { UserComponent } from './user/user.component'; 
import { AddComponent } from './user/add/add.component';
import { EditComponent } from './user/edit/edit.component';
import { EntryComponent } from './user/entry/entry.component';

// guard
import { AuthGuardService } from '../service/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
     {
        path: '',
        component: ContentComponent,
      } , {
        path: 'user',
        component: UserComponent, 
        // canActivateChild: [AuthGuardService],
        children: [ 
          {
            path: '',
            canActivate: [AuthGuardService],
            component: EditComponent,
          }, {
            path: 'edit',
            canActivate: [AuthGuardService],
            component: EditComponent,
          } , {
            path: 'add',
            canActivate: [AuthGuardService],
            component: AddComponent
          }, {
            path: 'entry',
            component: EntryComponent
          }
        ]  
      }, {
        path: 'other',
        component: ContentComponent
      }
    ]  
 }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class MainRoutingModule { }
