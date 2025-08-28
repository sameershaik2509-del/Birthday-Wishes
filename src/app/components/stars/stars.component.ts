// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-stars',
//   standalone:true,
//   imports:[CommonModule],
//   templateUrl: './stars.component.html',
//   styleUrls: ['./stars.component.scss']
// })
// export class StarsComponent {
//   stars = Array.from({ length: 60 }).map(() => ({
//     left: Math.random() * window.innerWidth,   // px instead of %
//     top: Math.random() * window.innerHeight,   // px instead of %
//     delay: Math.random() * 5,
//     size: Math.random() * 3 + 2                // random star size
//   }));
// }

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stars',
    standalone:true,
  imports:[CommonModule],
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent {
  stars = Array.from({ length: 60 }).map(() => ({
    left: Math.random() * window.innerWidth,   // random X
    top: Math.random() * window.innerHeight,   // random Y
    delay: Math.random() * 5,
    size: Math.random() * 3 + 2                // random size 2–5px
  }));
}
