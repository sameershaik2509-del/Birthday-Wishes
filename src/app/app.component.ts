import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SurpriseComponent } from './features/surprise/surprise.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SurpriseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wishes';
}
