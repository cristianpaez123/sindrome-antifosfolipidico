import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './presentation/components/navbar/navbar';
import { Hero } from './presentation/pages/hero/hero';
import { IntroductionComponent } from "./presentation/pages/introduction/introduction";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Hero, IntroductionComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mi-proyecto-web');
}
