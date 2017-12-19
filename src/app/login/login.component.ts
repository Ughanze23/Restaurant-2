import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  user = { remember: false};
  constructor(private dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit() {
  }
onSubmit() {
console.log('User:', this.user);
this.dialogRef.close();
}
}
