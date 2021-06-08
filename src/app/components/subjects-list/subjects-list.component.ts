import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { SubjectService } from '../../services/subject.service';
import { Subject } from '../../models/subject.model';
import { Router } from '@angular/router';
import { CentersService } from '../../services/centers.service';
interface CentreCancer {
  center_name: string,
  center_number: string
}
@Component({
  selector: 'app-subjects-list',
  templateUrl: './subjects-list.component.html',
  providers: [ConfirmationService, MessageService],
  styleUrls: ['./subjects-list.component.css']
})
export class SubjectsListComponent implements OnInit {
  subjectDialog!: boolean;
  Delete!: any;
  selectedSubjects!: Subject[];
  submitted!: boolean;
  subjects: any;
  currentSubject = null;
  currentIndex = -1;
  cols!: any[];
  subjectupdate: any;
  centers: CentreCancer[] = [];
  selectedCentre!: CentreCancer;
  cancercenters:any;
  constructor(private centersService: CentersService, private subjectService: SubjectService, private messageService: MessageService, private confirmationService: ConfirmationService, private router: Router) { }
  ngOnInit() {
    this.retrieveSubjects();
    this.retrieveCenters();
  }
  editSubject(subject: any) {
    this.subjectupdate = subject;
    this.subjectDialog = true;
  }
  // Retrieve subjects from database
  retrieveSubjects(): void {
    this.subjectService.getAllSubject()
      .subscribe(
        data => {
          this.subjects = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  // Retrieve centers from database
  retrieveCenters(): void {
    this.centersService.getAllCenter()
      .subscribe(
        data => {
          this.cancercenters = data;
          console.log(this.cancercenters);
        },
        error => {
          console.log(error);
        });
  }
  deleteSubject(subject: Subject) {

    this.confirmationService.confirm({
      message: 'Voulez vous supprimer? Cette opération est irréversible! ' + subject.subject_number + '?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.subjectService.deleteOneSubject(subject.id).subscribe(response => {
          this.router.navigate(['/subjects']);
          this.subjects = {};
          this.messageService.add({ severity: 'success', summary: 'Reussite', detail: 'Tout est OK', life: 3000 });
        }, err => {
          // console.log(err)
          this.messageService.add({ severity: 'warning', summary: 'Echec', detail: 'Une erreur est survenue', life: 3000 });
        })

      }
    });
  }
  hideDialog() {
    this.subjectDialog = false;
    this.submitted = false;
  }
  saveSubject() {
   let toUpdate=this.subjectupdate.id;
   this.confirmationService.confirm({
    message: 'Voulez vous mettre à jour cette information! ' + toUpdate+ '?',
    header: 'Confirmation',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      this.subjectService.updateSubject(toUpdate,this.subjectupdate).subscribe(response => {
        this.messageService.add({ severity: 'success', summary: 'Reussite', detail: 'Tout est OK', life: 3000 });
      }, err => {

        this.messageService.add({ severity: 'warning', summary: 'Echec', detail: 'Une erreur est survenue', life: 3000 });
      })

    }
  });
  }
}
