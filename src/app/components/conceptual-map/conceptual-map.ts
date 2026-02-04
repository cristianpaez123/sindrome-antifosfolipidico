import { Component, AfterViewInit, ElementRef } from '@angular/core';
import cytoscape from 'cytoscape';
import dagre from 'cytoscape-dagre';

cytoscape.use(dagre);

@Component({
  selector: 'app-conceptual-flow',
  standalone: true,
  templateUrl: './conceptual-map.html',
  styleUrls: ['./conceptual-map.css']
})
export class ConceptualFlowComponent implements AfterViewInit {

  constructor(private host: ElementRef) {}

  ngAfterViewInit(): void {
    const container = this.host.nativeElement.querySelector('#cy');
    if (!container) return;

    const cy = cytoscape({
      container,

      userZoomingEnabled: false,
      userPanningEnabled: false,
      boxSelectionEnabled: false,
      autoungrabify: true,

      layout: {
        name: 'dagre'
      } as any,

      style: [
        {
          selector: 'node',
          style: {
            label: 'data(label)',
            'text-wrap': 'wrap',
            'text-max-width': 420,   // 🔥 límite REAL
            'text-valign': 'center',
            'text-halign': 'left',
            'font-size': 11,
            padding: 16,
            width: 'label',         // 🔥 CLAVE
            height: 'label',        // 🔥 CLAVE
            shape: 'round-rectangle',
            'background-color': '#ffffff',
            'border-width': 1.5,
            'border-color': '#7da2c8'
          }
        } as any,

        {
          selector: '.title',
          style: {
            'background-color': '#b7d4f3',
            'font-size': 16,
            'font-weight': 'bold',
            'text-halign': 'center'
          }
        } as any,

        {
          selector: '.main',
          style: {
            'background-color': '#9fc5e8',
            'font-weight': 'bold',
            'text-halign': 'center'
          }
        } as any,

        {
          selector: '.therapy',
          style: {
            'background-color': '#e6eef7'
          }
        } as any,

        {
          selector: '.side',
          style: {
            'background-color': '#ffffff',
            'text-halign': 'left'
          }
        } as any,

        {
          selector: 'edge',
          style: {
            'curve-style': 'straight',
            'target-arrow-shape': 'triangle',
            'line-color': '#7da2c8',
            'target-arrow-color': '#7da2c8',
            width: 1.5
          }
        } as any
      ],

      elements: {
        nodes: [
          {
            data: {
              id: 'title',
              label: 'Tratamiento de pacientes con SAF catastrófico'
            },
            classes: 'title'
          },
          {
            data: {
              id: 'patient',
              label: 'Paciente con SAF catastrófico'
            },
            classes: 'main'
          },
          {
            data: {
              id: 'tt',
              label: `TRIPLE TERAPIA (TT):

Heparina no fraccionada IV (preferentemente)
+
Glucocorticoides a dosis altas 500–1000 mg IV × 3 días
+ orales (1 mg/kg)
+
Plasmaféresis y/o IGIV 400 mg/kg IV × 5 días

* En infecciones graves asociadas
disminuir la dosis`
            },
            classes: 'therapy'
          },
          {
            data: {
              id: 'factors',
              label: `Identificar y corregir factores precipitantes:

• Infección
• Cáncer
• Cirugía
• Anticoagulación subterapéutica
• Anticonceptivos orales
• Embarazo`
            },
            classes: 'side'
          }
        ],

        edges: [
          { data: { source: 'title', target: 'patient' } },
          { data: { source: 'patient', target: 'tt' } },
          { data: { source: 'patient', target: 'factors' } }
        ]
      }
    });

    // mover cuadro derecho
    const patient = cy.getElementById('patient');
    const factors = cy.getElementById('factors');

    const p = patient.position();
    factors.position({
      x: p.x + 520,
      y: p.y
    });
  }
}
