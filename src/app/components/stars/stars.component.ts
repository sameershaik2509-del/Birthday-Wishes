import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent {
  stars = Array.from({ length: 200 }).map(() => ({
    left: Math.random() * window.innerWidth,
    top: Math.random() * window.innerHeight,
    delay: Math.random() * 5,
    size: Math.random() * 3 + 5   // slightly bigger for cross shape
  }));
}
