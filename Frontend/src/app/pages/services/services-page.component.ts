import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ServicesComponent } from '../../components/services/services.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [NavbarComponent, ServicesComponent, FooterComponent],
  template: `
    <app-navbar></app-navbar>
    <app-services></app-services>
    <app-footer></app-footer>
  `
})
export class ServicesPageComponent {}
