import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { LoginDialogComponent } from '../user/login-dialog/login-dialog.component';

import { UserService } from '../service/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  animal: string;
  name: string;

  constructor(private router: Router, public dialog: MatDialog, private userService: UserService) { }

  ngOnInit() {
    console.log("main componenet..");
    // if(!this.userService.isLoggedIn()) {
    //   this.router.navigate(['/main', 'user']);
    //   console.log("Navigate to user login")
    // }
  }

  edit() {
    console.log("edit..")
    this.router.navigate(['/main', 'user']);
  }

  login() {
    console.log("login")
    this.router.navigate(['/main', 'user', 'entry'])
  }

  
}
