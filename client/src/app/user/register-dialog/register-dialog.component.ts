import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent implements OnInit {

  constructor(
    public registerDialogRef: MatDialogRef<RegisterDialogComponent>,
    // public loginDialogRef: MatDialogRef<LoginDialogComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }


  onLoginClick(): void {
    console.log("register");
    this.registerDialogRef.close();
    // this.dialog.open(RegisterDialogComponent);
    let dialogRef = this.dialog.open(LoginDialogComponent, {
      data: {
        name: "",
        animal: ""
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("dialog closed");
    });
  }

  onNoClick(): void {
    console.log(this.data.username);
    console.log(this.data.password);
    // inject user service
    this.registerDialogRef.close();
  }

}
