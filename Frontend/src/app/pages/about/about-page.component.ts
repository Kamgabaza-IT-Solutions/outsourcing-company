import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AboutComponent } from '../../components/about/about.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [NavbarComponent, AboutComponent, FooterComponent],
  template: `
    <app-navbar></app-navbar>
    <app-about></app-about>
    <app-footer></app-footer>
  `
})
export class AboutPageComponent {}
