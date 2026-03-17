import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const hero = canvas.parentElement!;
    const resizeCanvas = () => {
      canvas.width = hero.offsetWidth;
      canvas.height = hero.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = Array.from({ length: 28 }, () => ({
      r: [3, 4][Math.floor(Math.random() * 2)] as number,
      ox: Math.random() * (window.innerWidth || 800),
      oy: Math.random() * 600,
      x: 0, y: 0,
      alpha: 0.08 + Math.random() * 0.18,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      drift: Math.random() * Math.PI * 2,
      ds: 0.003 + Math.random() * 0.005,
      dr: 18 + Math.random() * 32,
      pulse: Math.random() * Math.PI * 2,
      ps: 0.01 + Math.random() * 0.015
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.drift += p.ds;
        p.pulse += p.ps;
        p.x = p.ox + Math.cos(p.drift) * p.dr;
        p.y = p.oy + Math.sin(p.drift) * p.dr;
        p.ox += p.vx;
        p.oy += p.vy;
        if (p.ox < -60) p.ox = canvas.width + 40;
        if (p.ox > canvas.width + 60) p.ox = -40;
        if (p.oy < -60) p.oy = canvas.height + 40;
        if (p.oy > canvas.height + 60) p.oy = -40;
        const a = p.alpha + Math.sin(p.pulse) * 0.05;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(244,168,35,${Math.max(0, a)})`;
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };
    animate();
  }

  goToContact() {
    this.router.navigate(['/contact']);
  }
}
