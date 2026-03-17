import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cta-banner',
  standalone: true,
  templateUrl: './cta-banner.component.html',
  styleUrl: './cta-banner.component.scss'
})
export class CtaBannerComponent {
  constructor(private router: Router) {}

  goToContact() {
    this.router.navigate(['/contact']);
  }
}
