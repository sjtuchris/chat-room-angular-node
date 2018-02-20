import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { EntryComponent } from './entry/entry.component';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';

import { SharedModule } from '../../shared/shared.module';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    EntryComponent,
    UserComponent,
    LoginDialogComponent
  ],
  entryComponents: [
    LoginDialogComponent
  ]
})
export class UserModule { }
