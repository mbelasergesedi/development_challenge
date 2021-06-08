import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import {AuthentificationService} from '../../services/authentification.service';
@Component({
  selector: 'app-createaccount',
  providers: [ConfirmationService, MessageService],
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent {
  public accountForm: FormGroup;
  submitted = false;
  usersDataResponse: any;
  constructor(private auth:AuthentificationService,private fb: FormBuilder, private confirmationService: ConfirmationService, private messageService: MessageService) {
    this.accountForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    console.log(this.accountForm);
  }
  // Pour accéder aux propriétés des formulaires
  get f() { return this.accountForm.controls; }

  newAccount() {
    let credits = this.accountForm.value;
    this.auth.newUser(credits).subscribe(
      data => {
        this.usersDataResponse = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
    console.log(this.accountForm.value);
  }
}