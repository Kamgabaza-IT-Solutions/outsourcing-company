import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [NavbarComponent, FaqComponent, FooterComponent],
  template: `
    <app-navbar></app-navbar>
    <app-faq></app-faq>
    <app-footer></app-footer>
  `
})
export class FaqPageComponent {}
