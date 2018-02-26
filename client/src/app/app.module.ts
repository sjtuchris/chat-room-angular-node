import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './main/main.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';

// services
import { AuthGuardService } from './service/auth-guard.service';
import { MessageService } from './service/message.service';
import { UserService } from './service/user.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MainModule,
    SharedModule,
    UserModule, 
    FormsModule, ReactiveFormsModule,
  ],
  providers: [AuthGuardService, 
    MessageService,
    UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
