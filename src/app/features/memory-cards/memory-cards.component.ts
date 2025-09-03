// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { MatCardModule } from '@angular/material/card';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';
// import { MatDialog, MatDialogModule } from '@angular/material/dialog';
// import { MemoryCardDialogComponent, MemoryCardData } from '../memory-card-dialog/memory-card-dialog.component';

// interface MemoryCardItem {
//   id: string;
//   title: string;
//   subtitle?: string;
//   emoji?: string;
//   description?: string;
//   date?: string;
// }

// @Component({
//   selector: 'app-memory-cards',
//   standalone: true,
//   imports: [
//     CommonModule,
//     MatCardModule,
//     MatButtonModule,
//     MatIconModule,
//     MatDialogModule,
//     MemoryCardDialogComponent,
//   ],
//   templateUrl: './memory-cards.component.html',
//   styleUrls: ['./memory-cards.component.scss']
// })
// export class MemoryCardsComponent {
//   constructor(private dialog: MatDialog) {}

//   cards: MemoryCardItem[] = [
//     { id: 'first-meet', title: 'First Meet', emoji: '🤝', subtitle: 'Where it all began', description: 'That first moment we met — the smiles, the awkward hello, and the instant comfort.', date: '2023-03-15' },
//     { id: 'first-connection', title: '1st Connection', emoji: '✨', subtitle: 'The spark', description: 'That feeling when we knew this was special and different.', date: '2023-04-02' },
//     { id: 'first-chat', title: '1st Chat', emoji: '💬', subtitle: 'Late-night talks', description: 'Chats that went on and on… time just flew.', date: '2023-04-05' },
//     { id: 'clarifications', title: 'Clarifications', emoji: '🧩', subtitle: 'Clearing the air', description: 'We talked it out and grew stronger together.', date: '2023-05-10' },
//     { id: 'first-call', title: '1st Call', emoji: '📞', subtitle: 'Voice that felt like home', description: 'Nervous ring, happy hello, and endless giggles.', date: '2023-05-20' },
//     { id: 'planned-meet', title: '1st Planned Meet', emoji: '📅', subtitle: 'The countdown', description: 'Excitement building up to our first proper plan.', date: '2023-06-01' },
//   ];

//   openCard(card: MemoryCardItem) {
//     const data: MemoryCardData = {
//       id: card.id,
//       title: card.title,
//       emoji: card.emoji,
//       description: card.description ?? '',
//       date: card.date,
//     };
//     this.dialog.open(MemoryCardDialogComponent, {
//       width: 'min(520px, 92vw)',
//       maxWidth: '92vw',
//       data,
//       enterAnimationDuration: '150ms',
//       exitAnimationDuration: '120ms',
//       autoFocus: false
//     });
//   }
// }

// /*
// Our first meet happened as pelli chupulu. On that day, I never imagined how important that moment would become in my life. It felt like just a formal introduction, yet it unknowingly turned into the beginning of our story. That simple meeting became the starting point of our relationship—a moment that slowly grew into something meaningful, something that gave direction to my heart. Looking back now, I realize that was not just a meeting, but the first step towards a bond that continues to shape my life
// */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MemoryCardDialogComponent, MemoryCardData } from '../memory-card-dialog/memory-card-dialog.component';

interface MemoryCardItem {
  id: string;
  title: string;
  subtitle?: string;
  emoji?: string;
  description?: string;
  date?: string;
}

@Component({
  selector: 'app-memory-cards',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MemoryCardDialogComponent,
  ],
  templateUrl: './memory-cards.component.html',
  styleUrls: ['./memory-cards.component.scss']
})
export class MemoryCardsComponent {
  constructor(private dialog: MatDialog) {}

  cards: MemoryCardItem[] = [
    { id: 'first-meet', title: 'First Meet', emoji: '🤝', subtitle: 'Where it all began', description: 'That first moment we met — the smiles, the awkward hello, and the instant comfort.', date: '2023-03-15' },
    { id: 'first-connection', title: 'Connection', emoji: '✨', subtitle: 'The spark', description: 'That feeling when we knew this was special and different.', date: '2023-04-02' },
    { id: 'first-chat', title: '1st Chat', emoji: '💬', subtitle: 'Late-night talks', description: 'Chats that went on and on… time just flew.', date: '2023-04-05' },
    { id: 'clarifications', title: 'Clarifications', emoji: '🧩', subtitle: 'Clearing the air', description: 'We talked it out and grew stronger together.', date: '2023-05-10' },
    { id: 'first-call', title: '1st Call', emoji: '📞', subtitle: 'Voice that felt like home', description: 'Nervous ring, happy hello, and endless giggles.', date: '2023-05-20' },
    { id: 'planned-meet', title: 'Planned Meet', emoji: '📅', subtitle: 'The countdown', description: 'Excitement building up to our first proper plan.', date: '2023-06-01' },
  ];

  openCard(card: MemoryCardItem) {
    const data: MemoryCardData = {
      id: card.id,
      title: card.title,
      emoji: card.emoji,
      description: card.description ?? '',
      date: card.date,
    };
    this.dialog.open(MemoryCardDialogComponent, {
      width: 'min(520px, 92vw)',
      maxWidth: '92vw',
      data,
      enterAnimationDuration: '150ms',
      exitAnimationDuration: '120ms',
      autoFocus: false
    });
  }
}
