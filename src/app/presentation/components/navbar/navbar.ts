import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  menuClosed: boolean = true; // estado inicial: menú oculto en móvil

  toggleMenu() {
    this.menuClosed = !this.menuClosed; // alterna oculto/visible
  }

}
