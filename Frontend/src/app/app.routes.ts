import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'about', loadComponent: () => import('./pages/about/about-page.component').then(m => m.AboutPageComponent) },
  { path: 'services', loadComponent: () => import('./pages/services/services-page.component').then(m => m.ServicesPageComponent) },
  { path: 'pricing', loadComponent: () => import('./pages/pricing/pricing-page.component').then(m => m.PricingPageComponent) },
  { path: 'faq', loadComponent: () => import('./pages/faq/faq-page.component').then(m => m.FaqPageComponent) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact-page.component').then(m => m.ContactPageComponent) },
  { path: '**', redirectTo: '' },
];
