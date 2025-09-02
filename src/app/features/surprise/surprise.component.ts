import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import confetti from 'canvas-confetti';

import { BalloonsComponent } from '../../components/balloons/balloons.component';
import { HeartsComponent } from '../../components/hearts/hearts.component';
import { StarsComponent } from '../../components/stars/stars.component';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-surprise',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    BalloonsComponent,
    HeartsComponent,
    StarsComponent,
    RouterLink
],
  templateUrl: './surprise.component.html',
  styleUrls: ['./surprise.component.scss']
})
export class SurpriseComponent {
  revealed = signal(false);
  showSpecial = false; // set true only for special message
  name = "Sameer";

  constructor(private router: Router) {}

  goToMessage() {
    this.router.navigate(['/message']);
  }
  reveal() {
    this.revealed.set(true);

    if (this.showSpecial) {
      this.blastHearts();
    } else {
      this.blastConfetti();
    }
  }

  // 🎉 Normal blast
  private blastConfetti() {
    const count = 5;
    let i = 0;
    const interval = setInterval(() => {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
      i++;
      if (i >= count) clearInterval(interval);
    }, 500);
  }

  // ❤️ Heart blast (special)
  private blastHearts() {
    const duration = 2000; // 2 seconds
    const animationEnd = Date.now() + duration;

    const defaults = {
      spread: 60,
      ticks: 50,
      gravity: 0.8,
      decay: 0.95,
      scalar: 2,
      shapes: ['text'] as any, // use emoji shape
      text: '❤️',
      colors: ['#ff0000', '#eeececff']
    };

    const interval: any = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      // Blast from left
      confetti({
        ...defaults,
        particleCount: 10,
        origin: { x: 0, y: Math.random() - 0.2 }
      });

      // Blast from right
      confetti({
        ...defaults,
        particleCount: 10,
        origin: { x: 1, y: Math.random() - 0.2 }
      });
    }, 200);
  }
}
