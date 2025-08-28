import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalloonsComponent } from './balloons.component';

describe('BalloonsComponent', () => {
  let component: BalloonsComponent;
  let fixture: ComponentFixture<BalloonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BalloonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalloonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
