import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-skin-manifestations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skin-manifestations.html',
  styleUrls: ['./skin-manifestations.css']
})
export class SkinManifestations {

  isModalOpen = false;
  activeImage: string | null = null;

  openModal(imageSrc: string) {
    console.log('CLICK OK', imageSrc);
    this.activeImage = imageSrc;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.activeImage = null;
  }

}
