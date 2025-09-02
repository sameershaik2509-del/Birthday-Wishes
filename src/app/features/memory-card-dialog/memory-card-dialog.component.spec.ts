import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryCardDialogComponent } from './memory-card-dialog.component';

describe('MemoryCardDialogComponent', () => {
  let component: MemoryCardDialogComponent;
  let fixture: ComponentFixture<MemoryCardDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemoryCardDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoryCardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
