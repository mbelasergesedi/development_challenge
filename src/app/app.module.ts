import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// subjects
import { AjouterSubjectComponent } from './components/ajouter-subject/ajouter-subject.component';
import { SubjectDetailsComponent } from './components/subject-details/subject-details.component';
import { SubjectsListComponent } from './components/subjects-list/subjects-list.component';
// Cancer Centers
import { CenterCancerComponent } from './center-cancer/center-cancer.component';
import { AddcenterCenterComponent } from './addcenter-center/addcenter-center.component';

//Module pour les formulaires
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
// Gestion de l'authentification
import { AuthInterceptorService } from './auth-interceptor.service';

//PrimeNG
import {PasswordModule} from 'primeng/password';
import { MessageModule } from 'primeng/message';
import { TabMenuModule } from 'primeng/tabmenu';
import { AccordionModule } from 'primeng/accordion';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { FileUploadModule } from 'primeng/fileupload';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { CreateaccountComponent } from './components/createaccount/createaccount.component';
import { ProfilComponent } from './components/profil/profil.component';
@NgModule({
  declarations: [
    AppComponent,
    AjouterSubjectComponent,
    SubjectDetailsComponent,
    SubjectsListComponent,
    CenterCancerComponent,
    AddcenterCenterComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    CreateaccountComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    BrowserAnimationsModule,
    MessageModule,
    MessageModule,
    TabMenuModule,
    PasswordModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TabMenuModule,
    ToolbarModule,
    DropdownModule,
    MenuModule,
    MenubarModule,
    PanelModule,
    AccordionModule,
    InputTextModule,
    DialogModule,
    ButtonModule,
    CalendarModule,
    MessagesModule,
    ConfirmDialogModule,
    ToastModule,

    FileUploadModule,
    CheckboxModule,
    InputNumberModule,
    TableModule,
    InputTextareaModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
