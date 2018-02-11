import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
// include material
import { SharedModule } from '../shared/shared.module';

import { MainComponent } from './main.component';
import { ContentComponent } from './content/content.component';

import { MainRoutingModule } from './main-routing.module';
import { ListComponent } from './content/list/list.component';
import { ChatContentComponent } from './content/chat-content/chat-content.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [MainComponent, ContentComponent, ListComponent, ChatContentComponent],
  exports:[
    MainComponent
  ]
})
export class MainModule { }
