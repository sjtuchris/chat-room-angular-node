import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

// import user model
import { User } from '../../../model/user';

// import service
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  isLogin: boolean = true;

  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) { 
    this.createLoginForm();
    this.createRegisterForm();
  }

  ngOnInit() {
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(6)],
      gender: ['', Validators.required],
      // .... 待补充
    })
  }

  onSubmit() {
    console.log("sumit..");

    if(this.isLogin) {
      // login 操作
      this.userService.login("");
    } else {
      // register 操作
    }
  }
}
