import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { EntryComponent } from './entry/entry.component';

import { UserRoutingModule } from './user-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [
    AddComponent,
    EditComponent,
    EntryComponent
  ]
})
export class UserModule { }
