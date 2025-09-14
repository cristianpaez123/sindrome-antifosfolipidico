import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './presentation/components/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar], // 👈 solo Navbar y RouterOutlet
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}