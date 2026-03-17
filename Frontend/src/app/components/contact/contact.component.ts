import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.form.invalid) return;
    this.loading = true;
    this.error = '';
    this.showSuccess = false;

    const name = `${this.form.value.firstName} ${this.form.value.lastName}`.trim();
    const message = this.form.value.service
      ? `Service: ${this.form.value.service}\n\n${this.form.value.message}`
      : this.form.value.message!;

    const payload = {
      access_key: '885e5178-a9ef-4c70-a1b6-4fc9e388ee92',
      subject: `New Enquiry from ${name} — OutsourceSA`,
      name,
      email: this.form.value.email,
      company: this.form.value.company || 'Not provided',
      service: this.form.value.service || 'Not specified',
      message,
    };

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          this.showSuccess = true;
          this.form.reset();
        } else {
          this.error = 'Failed to send. Please try again.';
        }
      })
      .catch(() => {
        this.error = 'Failed to send. Please try again.';
      })
      .finally(() => (this.loading = false));
  }
}
