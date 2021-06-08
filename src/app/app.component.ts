import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items!: MenuItem[];  
  activeItem!: MenuItem;
  constructor(private primengConfig: PrimeNGConfig) { }
  ngOnInit() {
    this.items = [
      {label: 'Sujets', icon: 'pi pi-fw pi-users',routerLink: "subjects"},
      {label: 'Nouveau sujet', icon: 'pi pi-fw pi-user-edit',routerLink: "ajout"},
      {label: 'All Cancer Center', icon: 'pi pi-fw pi-book',routerLink: "allcentercancer"},
      {label: 'New Cancer Center', icon: 'pi pi-fw pi-pencil',routerLink: "addcancercenter"},
      {label: 'Créer un compte', icon: 'pi pi-fw pi-user',routerLink: "createaccount"},
      {label: 'Identification', icon: 'pi pi-fw pi-lock',routerLink: "login"},
  ];
  this.activeItem = this.items[0];
}
}