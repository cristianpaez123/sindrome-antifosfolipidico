import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-local-management-protocol',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './local-management-protocol.html',
  styleUrls: ['./local-management-protocol.css'] // ✅ PLURAL
})
export class LocalManagementProtocol {

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
