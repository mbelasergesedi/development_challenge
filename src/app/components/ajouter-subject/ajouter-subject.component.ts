import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { SubjectService } from '../../services/subject.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { CentersService } from '../../services/centers.service';
@Component({
  selector: 'app-ajouter-subject',
  templateUrl: './ajouter-subject.component.html',
  providers: [ConfirmationService, MessageService],
  styleUrls: ['./ajouter-subject.component.css']
})
export class AjouterSubjectComponent {
  position!: string;
  public subjectForm: FormGroup;
  value!: Date;
  // !!! faire attention, il s'agit de sujet et non subject qui est un nom reservé !!

  submitted = false;
  centers: any;
  constructor(private centersService: CentersService, public subjectService: SubjectService, private fb: FormBuilder, private confirmationService: ConfirmationService, private messageService: MessageService) {

    this.subjectForm = this.fb.group({
      subject_number: ['', Validators.required],
      subject_firstname: ['', Validators.required],
      subject_lastname: ['', Validators.required],
      subject_birthdate: ['', Validators.required],
    });
  }

  // Pour accéder aux propriétés des formulaires
  get f() { return this.subjectForm.controls; }

  newSujet(): void {
    //console.log(this.subjectForm.value)
    let dataSubject = this.subjectForm.value;
    this.submitted = true;
    this.subjectService.createSubject(dataSubject).subscribe(
      response => {
        console.log(response);
        let firstname = this.subjectForm.value.subject_firstname;
        let lastname = this.subjectForm.value.subject_lastname;
        this.submitted = true
        this.messageService.add({ severity: 'success', summary: 'Message', detail: 'Le sujet suivant a été ajouté: ' + firstname + ' ' + lastname });
      },
      error => {
        console.log(error);
        this.messageService.add({ severity: 'warning', summary: 'Message', detail: 'Une erreur est survenue' });
      }
    );
  }
  retrieveCenters(): void {
    this.centersService.getAllCenter()
      .subscribe(
        data => {
          this.centers = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
