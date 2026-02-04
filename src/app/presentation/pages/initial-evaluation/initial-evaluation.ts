import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ⬅️ IMPORTANTE

@Component({
  selector: 'app-initial-evaluation',
  standalone: true,
  imports: [CommonModule], // ⬅️ NECESARIO para que funcione *ngIf y [class]
  templateUrl: './initial-evaluation.html',
  styleUrls: ['./initial-evaluation.css']
})
export class InitialEvaluationComponent {
  activeTab: string = 'historia';

  setActive(tab: string) {
    this.activeTab = tab;  
  }

  isActive(tab: string): boolean {
    return this.activeTab === tab;
  }
}