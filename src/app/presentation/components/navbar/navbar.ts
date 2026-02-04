import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule], // ✅ Esto reemplaza RouterLink y agrega routerLinkActive
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {

  menuClosed: boolean = true;

  toggleMenu() {
    this.menuClosed = !this.menuClosed;
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
}
