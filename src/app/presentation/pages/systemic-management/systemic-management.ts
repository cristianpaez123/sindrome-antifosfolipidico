import { Component, AfterViewInit, ElementRef } from '@angular/core';
import mermaid from 'mermaid';
import { FlowchartComponent } from '../../../components/flowchart/flowchart';
import { ConceptualFlowComponent } from '../../../components/conceptual-map/conceptual-map';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-systemic-management',
  standalone: true,
  imports: [CommonModule, FlowchartComponent, ConceptualFlowComponent],
  templateUrl: './systemic-management.html',
  styleUrls: ['./systemic-management.css']
})
export class SystemicManagement implements AfterViewInit {

  isModalOpen = false;
  activeMap: 'image1' | 'image2' | null = null;


  constructor(private el: ElementRef) { }

  async ngAfterViewInit(): Promise<void> {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'default',
      flowchart: { curve: 'basis' }
    });

    const diagram = `
      flowchart LR
        A([Refractario al tratamiento])
        A -->|SI| B([Continuar tratamiento])
        A -->|NO| C([Realizar seguimiento])
    `;

    try {
      // render() devuelve un objeto { svg: string, bindFunctions: () => void }
      const { svg } = await mermaid.render('mermaidDiagram', diagram);

      const container = this.el.nativeElement.querySelector('#mermaidContainer');
      container.innerHTML = svg; // ✅ insertamos solo el SVG
    } catch (err) {
      console.error('Error renderizando Mermaid:', err);
    }
  }

  openMap(type: 'image1' | 'image2') {
    this.activeMap = type;
    this.isModalOpen = true;
  }

  closeMap() {
    this.isModalOpen = false;
    this.activeMap = null;
  }
}
