import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Balloon {
  left: string;
  delay: string;
  color: string;
}

@Component({
  selector: 'app-balloons',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './balloons.component.html',
  styleUrls: ['./balloons.component.scss']
})
export class BalloonsComponent implements OnInit {
  balloons: Balloon[] = [];

  colors = ['#ff6b6b', '#ffcc70', '#6bcff6', '#9b59b6', '#2ecc71'];

  ngOnInit(): void {
    this.generateBalloons();
  }

  generateBalloons() {
    for (let i = 0; i < 15; i++) {
      const left = Math.floor(Math.random() * 90) + '%';
      const delay = (Math.random() * 5).toFixed(2) + 's';
      const color = this.colors[Math.floor(Math.random() * this.colors.length)];
      this.balloons.push({ left, delay, color });
    }
  }
}
