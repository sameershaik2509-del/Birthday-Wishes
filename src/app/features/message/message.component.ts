import { Component } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  constructor( private router : Router){}

  goToMessage() {
    this.router.navigate(['/memory-cards']);
  }

}
