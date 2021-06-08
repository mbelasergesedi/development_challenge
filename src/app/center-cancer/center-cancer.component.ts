import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { CentersService } from '../services/centers.service';
import { Center } from '../models/center';
import { Router } from '@angular/router';
@Component({

  selector: 'app-center-cancer',
  providers: [ConfirmationService, MessageService],
  templateUrl: './center-cancer.component.html',
  styleUrls: ['./center-cancer.component.css']
})
export class CenterCancerComponent implements OnInit {
  centerDialog!: boolean;
  Delete!: any;
  selectedCenters!: Center[];
  submitted!: boolean;
  centers: any;
  currentSubject = null;
  currentIndex = -1;
  cols!: any[];
  centerupdate: any;


  constructor(private centersService: CentersService, private messageService: MessageService, private confirmationService: ConfirmationService, private router: Router) { }

  ngOnInit() {

    this.retrieveCenters();
  }

  editCenter(subject: any) {
    this.centerupdate = subject;
    this.centerDialog = true;
  }

  // Retrieve centers from database
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
  deleteCenter(center: any) {
    console.log(center);
    this.confirmationService.confirm({
      message: 'Voulez vous supprimer? Cette opération est irréversible! ' + '?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.centersService.deleteOneCenter(center.id).subscribe(response => {
          this.router.navigate(['/allcentercancer']);
          this.centers = {};
          this.messageService.add({ severity: 'success', summary: 'Reussite', detail: 'Tout est OK', life: 3000 });
        }, err => {
          // console.log(err)
          this.messageService.add({ severity: 'warning', summary: 'Echec', detail: 'Une erreur est survenue', life: 3000 });
        })

      }
    });
  }
  hideDialog() {
    this.centerDialog = false;
    this.submitted = false;
  }
  saveCenter() {
  }
}
