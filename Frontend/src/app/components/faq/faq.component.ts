import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  openIndex: number | null = null;

  faqItems = [
    { q: 'Why outsource to South Africa?', a: 'South Africa offers a highly skilled workforce, strong English proficiency, and competitive labour costs compared to the United States — typically 50–70% lower for equivalent roles.' },
    { q: 'How much can my company save?', a: 'Most U.S. companies save between 50% and 70% on staffing costs when hiring South African professionals. A customer support agent that costs $45,000/year in the U.S. can be hired for approximately $12,000/year in South Africa.' },
    { q: 'Is communication easy?', a: 'Yes. English is the primary language of business and education throughout South Africa. South African professionals communicate fluently and clearly with American clients and teams.' },
    { q: 'What about data security and compliance?', a: 'South Africa has strong data protection laws including the Protection of Personal Information Act (POPIA), which regulates how companies handle personal data — comparable to GDPR in Europe.' },
    { q: 'Can South African staff work U.S. hours?', a: 'Yes. Many South African professionals work U.S. time zones. Night shifts and U.S.-aligned schedules are very common in the outsourcing industry, and talent is accustomed to it.' },
    { q: 'How long does hiring take?', a: 'Most placements are completed within 7–14 days. We pre-screen and vet candidates so you only speak with professionals who are a strong match for your requirements.' }
  ];

  toggle(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
