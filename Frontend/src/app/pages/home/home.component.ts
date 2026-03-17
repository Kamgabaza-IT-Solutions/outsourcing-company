import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { LogosComponent } from '../../components/logos/logos.component';
import { WhyComponent } from '../../components/why/why.component';
import { HowItWorksComponent } from '../../components/how-it-works/how-it-works.component';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    LogosComponent,
    WhyComponent,
    HowItWorksComponent,
    CtaBannerComponent,
    FooterComponent,
  ],
  template: `
    <app-navbar></app-navbar>
    <app-hero></app-hero>
    <app-logos></app-logos>
    <app-why></app-why>
    <app-how-it-works></app-how-it-works>
    <app-cta-banner></app-cta-banner>
    <app-footer></app-footer>
  `
})
export class HomeComponent {}
