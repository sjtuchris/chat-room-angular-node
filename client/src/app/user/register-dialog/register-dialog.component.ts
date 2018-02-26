import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    public registerDialogRef: MatDialogRef<RegisterDialogComponent>,
    // public loginDialogRef: MatDialogRef<LoginDialogComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private userService: UserService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      nickname: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatpassword: ['', [Validators.required]],
      email: ['', [Validators.email]]
    })
  }


  onLoginClick(): void {
    console.log("register");
    this.registerDialogRef.close();
    // this.dialog.open(RegisterDialogComponent);
    let dialogRef = this.dialog.open(LoginDialogComponent, {
      data: {
        name: "",
        animal: ""
      }, disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("dialog closed");
    });
  }

  onRegisterClick(): void {
    console.log(this.registerForm.value);
    this
  }


}
