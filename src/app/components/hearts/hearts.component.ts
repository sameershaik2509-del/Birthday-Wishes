import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hearts',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './hearts.component.html',
  styleUrls: ['./hearts.component.scss']
})
export class HeartsComponent implements OnChanges {
  @Input() trigger: boolean = false;  // external trigger
  hearts: { left: number, top: number }[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['trigger'] && changes['trigger'].currentValue) {
      this.launchBlast();
    }
  }

  launchBlast() {
  this.hearts = [];
  for (let i = 0; i <500; i++) {
    this.hearts.push({
      left: Math.random() * 100,
      top: Math.random() * 100
    });
  }

  // remove hearts after animation duration
  setTimeout(() => {
    this.hearts = [];
  }, 6000); // 3 seconds, matches CSS animation
}

}
