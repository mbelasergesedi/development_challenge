import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import {AuthentificationService} from '../../services/authentification.service';
@Component({
  selector: 'app-login',
  providers: [ConfirmationService, MessageService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginForm: FormGroup;
  submitted = false;
  dataUsers: any;
  constructor(private auth:AuthentificationService,private fb: FormBuilder, private confirmationService: ConfirmationService, private messageService: MessageService) {
    this.loginForm = this.fb.group({
      user_email: ['', Validators.required],
      user_pwd: ['', Validators.required]
    });
  }
  // Pour accéder aux propriétés des formulaires
  get f() { return this.loginForm.controls; }
  ngOnInit(): void {
  }
  LoginOnSys() {
    console.log(this.loginForm.value)
    let permissions = this.loginForm.value;
    this.auth.logInUser(permissions).subscribe(
      data => {
        this.dataUsers = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
}