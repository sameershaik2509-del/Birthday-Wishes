// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-memory-card-dialog',
//   standalone: true,
//   imports: [],
//   templateUrl: './memory-card-dialog.component.html',
//   styleUrl: './memory-card-dialog.component.scss'
// })
// export class MemoryCardDialogComponent {

// }
import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface MemoryCardData {
  id: string;
  title: string;
  emoji?: string;
  description: string;
  date?: string;
}

@Component({
  selector: 'app-memory-card-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './memory-card-dialog.component.html',
  styleUrls: ['./memory-card-dialog.component.scss']
})
export class MemoryCardDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: MemoryCardData,
    private dialogRef: MatDialogRef<MemoryCardDialogComponent>
  ) {}

  close() {
    this.dialogRef.close();
  }
}

