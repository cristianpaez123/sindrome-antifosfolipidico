import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { IntroductionComponent } from '../introduction/introduction';

@Component({
  selector: 'app-home',
  standalone: true,
   templateUrl: './home.html',
  styleUrl: './home.css',
  imports: [Hero, IntroductionComponent]  // 👈 IMPORTARLOS AQUÍ
})
export class HomeComponent {}