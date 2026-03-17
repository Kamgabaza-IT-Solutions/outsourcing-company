import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [NavbarComponent, ContactComponent, FooterComponent],
  template: `
    <app-navbar></app-navbar>
    <app-contact></app-contact>
    <app-footer></app-footer>
  `
})
export class ContactPageComponent {}
