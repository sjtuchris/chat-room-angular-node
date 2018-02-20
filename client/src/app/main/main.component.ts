import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { LoginDialogComponent } from './user/login-dialog/login-dialog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  animal: string;
  name: string;

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
  }

  edit() {
    console.log("edit..")
    this.router.navigate(['/main', 'user']);
  }

  login() {
    console.log("login")
    this.router.navigate(['/main', 'user', 'entry'])
  }

  openDialog() {
    let dialogRef = this.dialog.open(LoginDialogComponent, {
      data: {
        name: this.name,
        animal: this.animal
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("dialog closed");
      this.animal = result;
    })
  }
}
