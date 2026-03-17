import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { PricingComponent } from '../../components/pricing/pricing.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [NavbarComponent, PricingComponent, FooterComponent],
  template: `
    <app-navbar></app-navbar>
    <app-pricing></app-pricing>
    <app-footer></app-footer>
  `
})
export class PricingPageComponent {}
