import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
// include material
import { SharedModule } from '../shared/shared.module';

import { MainComponent } from './main.component';
import { ContentComponent } from './content/content.component';

import { MainRoutingModule } from './main-routing.module';
import { UserModule } from './user/user.module';

import { ChatContentComponent } from './content/chat-content/chat-content.component';

import { LoginDialogComponent } from './user/login-dialog/login-dialog.component';

// declare user component here?
@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    FormsModule,
    UserModule
  ],
  declarations: [MainComponent, ContentComponent, ChatContentComponent],
  exports:[
    MainComponent,
    UserModule
  ]
})
export class MainModule { }
