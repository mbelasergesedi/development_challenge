
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {CentersService} from './../services/centers.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import { countries } from '../components/shared/store/country-data-store';
@Component({

  selector: 'app-addcenter-center',
  providers: [ConfirmationService,MessageService],
  templateUrl: './addcenter-center.component.html',
  styleUrls: ['./addcenter-center.component.css']
})
export class AddcenterCenterComponent {
  selectedState: any = null;
  public countries:any = countries
  position!: string;
  public centerForm: FormGroup;
  value!: Date;
  // !!! faire attention, il s'agit de sujet et non subject qui est un nom reservé !!

  submitted = false;
  constructor(public centersService: CentersService, private fb: FormBuilder,private confirmationService: ConfirmationService, private messageService: MessageService) {
    
    this.centerForm = this.fb.group({
      center_name: ['', Validators.required],
      center_number: ['', Validators.required],
      street_name: ['', Validators.required],
      postal_code: ['', Validators.required],
      city_name: ['', Validators.required],
      country_name: ['', Validators.required],
    });
  }

  // Pour accéder aux propriétés des formulaires
  get f() { return this.centerForm.controls; }

  newCenter():void {
    //console.log(this.subjectForm.value)
    let dataCenter = this.centerForm.value;
    this.submitted = true;
    this.centersService.createCenter(dataCenter).subscribe(
      response => {
        console.log(response);
        let centerName=this.centerForm.value.center_name;
        let centerNumber=this.centerForm.value.center_number;
        this.submitted = true
        this.messageService.add({severity:'success', summary:'Message', detail:'Le centre suivant a été ajouté: ' + centerName + ' ' +centerNumber});
      },
      error => {
        console.log(error);
        this.messageService.add({severity:'warning', summary:'Message', detail:'Une erreur est survenue'});
      }
    );
  }
}
