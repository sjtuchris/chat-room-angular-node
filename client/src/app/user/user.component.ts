import { Component, OnInit, Inject, Optional } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { UserService } from '../service/user.service';


@Component({
  // selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    // by default, if not login
    // pop out the login form
    setTimeout(() => {
      this.openLogin();
    })
  }
  
  openLogin(): void {
    let dialogRef = this.dialog.open(RegisterDialogComponent, {
      data: {
        name: "",
        animal: ""
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("dialog closed");
    });
  }

}
