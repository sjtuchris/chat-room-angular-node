import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [
    AddComponent,
    EditComponent,
    UserComponent,
    LoginDialogComponent,
    RegisterDialogComponent
  ],
  entryComponents: [
    LoginDialogComponent,
    RegisterDialogComponent
  ]
})
export class UserModule { }
