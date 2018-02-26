import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { LoginDialogComponent } from './user/login-dialog/login-dialog.component';
// import { RegisterDialogComponent} from './user/register-dialog/register-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public dialog: MatDialog) {

  }

  openDialog() {
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
}
