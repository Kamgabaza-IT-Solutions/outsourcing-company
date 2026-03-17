import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    company: [''],
    service: [''],
    message: ['', Validators.required],
  });
  loading = false;
  showSuccess = false;
  error = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  onSubmit() {
    if (this.form.invalid) return;
    this.loading = true;
    this.error = '';
    this.showSuccess = false;

    const payload = {
      name: `${this.form.value.firstName} ${this.form.value.lastName}`.trim(),
      email: this.form.value.email,
      company: this.form.value.company || undefined,
      message: `${this.form.value.service ? `Service: ${this.form.value.service}\n\n` : ''}${this.form.value.message}`,
    };

    this.http.post(`${environment.apiUrl}/enquiry`, payload, { responseType: 'text' }).subscribe({
      next: () => {
        this.showSuccess = true;
        this.form.reset();
      },
      error: (err) => {
        this.error = err.error || 'Failed to send. Please try again.';
      },
      complete: () => this.loading = false,
    });
  }
}
