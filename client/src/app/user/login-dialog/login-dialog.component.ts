import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  constructor(
    // public registerDialogRef: MatDialogRef<RegisterDialogComponent>,
    public loginDialogRef: MatDialogRef<LoginDialogComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) { 

    }

  ngOnInit() {
  }

  private onRegisterClick(): void {
    console.log("register");
    this.loginDialogRef.close();
    // this.dialog.open(RegisterDialogComponent);
    let dialogRef = this.dialog.open(RegisterDialogComponent, {
      data: {
        name: "",
        animal: ""
      }, disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("dialog closed");
    });
  }

  private onLoginClick(): void {
    console.log(this.data.username);
    console.log(this.data.password);
    // inject user service
    // this.loginDialogRef.close();
  }
}
