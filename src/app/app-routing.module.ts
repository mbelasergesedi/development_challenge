import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcenterCenterComponent } from './addcenter-center/addcenter-center.component';
import { CenterCancerComponent } from './center-cancer/center-cancer.component';
import { AjouterSubjectComponent } from './components/ajouter-subject/ajouter-subject.component';
import { CreateaccountComponent } from './components/createaccount/createaccount.component';
import { LoginComponent } from './components/login/login.component';
import { SubjectDetailsComponent } from './components/subject-details/subject-details.component';
import { SubjectsListComponent } from './components/subjects-list/subjects-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'subjects', pathMatch: 'full' },
  // SUBJECTS
  // Pour lister tous les sujets
  { path: 'subjects', component: SubjectsListComponent },
  // Pour accéder à un sujet (recherche ou delete)
  { path: 'subjects/:id', component: SubjectDetailsComponent },
  // Pour ajouter un nouveau center cancer 
  { path: 'ajout', component: AjouterSubjectComponent },
  //CENTER CANCER
  // v les cancer center
  { path: 'allcentercancer', component: CenterCancerComponent },
  // Pour ajouter un nouveau center cancer 
  { path: 'addcancercenter', component: AddcenterCenterComponent },
  // Pour créer un compte
  { path: 'createaccount', component: CreateaccountComponent },
  // Pour créer un compte
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
