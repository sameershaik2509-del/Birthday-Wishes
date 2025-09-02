import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  constructor( private router : Router){}

  goToMessage() {
    this.router.navigate(['/memory-cards']);
  }

}
