import { Component, AfterViewInit, ElementRef } from '@angular/core';
import cytoscape from 'cytoscape';
import dagre from 'cytoscape-dagre';

cytoscape.use(dagre);

@Component({
  selector: 'app-node',
  standalone: true,
  templateUrl: './flowchart.html',
  styleUrls: ['./flowchart.css']
})
export class FlowchartComponent implements AfterViewInit {

  constructor(private host: ElementRef) { }

  ngAfterViewInit(): void {
    const container = this.host.nativeElement.querySelector('#cy');
    if (!container) {
      console.error('Flowchart: no se encontró #cy en el template');
      return;
    }

    const cy = cytoscape({
      container,

      // 🔒 Bloqueos para impedir mover/seleccionar
      userZoomingEnabled: false,
      userPanningEnabled: false,
      boxSelectionEnabled: false,
      autoungrabify: true,

      layout: {
        name: 'dagre',
        rankDir: 'TB',
        nodeSep: 95,
        edgeSep: 55,
        rankSep: 120
      } as any,

      style: [
        {
          selector: 'node',
          style: {
            'label': 'data(label)',
            'text-wrap': 'wrap',
            'text-max-width': '250px',
            'text-valign': 'center',
            'text-halign': 'center',
            'font-size': '15px',
            'color': '#000',
            'padding': '10px',
            'height': 'label',
            'shape': 'round-rectangle',
            'background-color': '#fff',
            'border-color': '#999',
            'border-width': 1,
            'opacity': 0   // fade-in inicial
          }
        },

        {
          selector: '.title',
          style: {
            'background-color': '#b7d4f3',
            'font-size': '22px',
            'font-weight': 700,
            'padding': '18px',
            'width': '520px',
            'border-width': 2,
            'border-color': '#6b8eb5'
          }
        },

        {
          selector: '.blue-box',
          style: {
            'background-color': '#8dc2f0',
            'font-size': '19px',
            'font-weight': 600,
            'width': '270px',
            'padding': '14px'
          }
        },

        {
          selector: '.small-blue',
          style: {
            'background-color': '#c7def7',
            'font-size': '19px',
            'width': '95px',
            'padding': '9px'
          }
        },

        {
          selector: '.note',
          style: {
            'background-color': '#f7cc9c',
            'font-size': '19px',
            'width': '360px',
            'padding': '14px',
            'border-width': 1.5,
            'border-color': '#bb7935'
          }
        },

        {
          selector: '.diamond',
          style: {
            'shape': 'diamond',
            'background-color': '#d6b1e8',
            'font-size': '15px',
            'width': '37`0px',
            'height': 'label',    // 👈 clave
            'padding': '26px',    // aumenta altura visual 
            'border-color': '#7a4e94'
          }
        },

        {
          selector: '.white-box',
          style: {
            'background-color': '#fff',
            'font-size': '19px',
            'width': '300px',
            'padding': '12px',
            'border-width': 2,
            'border-color': '#d68133',
            'color': '#000'
          }
        },

        {
          selector: 'edge',
          style: {
            'curve-style': 'bezier',
            'target-arrow-shape': 'triangle',
            'line-color': '#4f4f4f',
            'target-arrow-color': '#4f4f4f',
            'width': 2.5
          }
        }
      ],

      elements: {
        nodes: [
          { data: { id: 't0', label: 'Actitud terapéutica en pacientes con anticuerpos antifosfolípidos (AAF)' }, classes: 'title' },
          { data: { id: 'n1', label: 'Paciente con AAF positivos' }, classes: 'blue-box' },
          { data: { id: 'n2', label: 'Trombosis previa' }, classes: 'blue-box' },
          { data: { id: 'si1', label: 'Sí' }, classes: 'small-blue' },
          { data: { id: 'no1', label: 'No' }, classes: 'small-blue' },
          { data: { id: 'si2', label: 'Sí' }, classes: 'small-blue' },
          { data: { id: 'no2', label: 'No' }, classes: 'small-blue' },
          { data: { id: 'emb', label: 'Embarazada' }, classes: 'blue-box' },
          { data: { id: 'nota1', label: '- Control estricto de factores de riesgo cardiovascular\n- Evitar situaciones predisponentes...\n- En situaciones de alto riesgo trombótico: HBPM profiláctica' }, classes: 'note' },
          { data: { id: 'nota2', label: '1. Sin tratamiento\n2. Considerar AAS 100 mg/día si:\n- Perfil serológico de riesgo\n- Factores CV asociados\n- LES asociado' }, classes: 'white-box' },
          { data: { id: 'tratamiento1', label: '1. Heparina no fraccionada o HBPM\n2. Antagonistas de la vitamina K (INR 2–3)\nDuración indefinida' }, classes: 'blue-box' },
          { data: { id: 'rombo', label: 'Recurrencia trombótico recibiendo anticoagulación estándar' }, classes: 'diamond' },
          { data: { id: 'nota3', label: '1. Valorar:\n- Aumentar dosis de anticoagulación (INR 3–4)\n- Asociar AAS\n- Hidroxicloroquina/estatinas\n\n2. Si están contraindicados antagonistas vitamina K:\n- Usar HBPM dosis anticoagulante\n- Considerar ACOD' }, classes: 'note' }
        ],
        edges: [
          { data: { source: 't0', target: 'n1' } },
          { data: { source: 'n1', target: 'n2' } },
          { data: { source: 'n2', target: 'si1' } },
          { data: { source: 'n2', target: 'no1' } },
          { data: { source: 'si1', target: 'tratamiento1' } },
          { data: { source: 'tratamiento1', target: 'rombo' } },
          { data: { source: 'rombo', target: 'nota3' } },
          { data: { source: 'no1', target: 'emb' } },
          { data: { source: 'emb', target: 'si2' } },
          { data: { source: 'emb', target: 'no2' } },
          { data: { source: 'no2', target: 'nota2' } },
          { data: { source: 'n1', target: 'nota1' } }
        ]
      }
    });

    // ⭐ Fade + Slide animado para cada nodo
    cy.nodes().forEach((node, i) => {
      const original = node.position();
      node.position({ x: original.x, y: original.y + 25 });

      node.animate(
        {
          style: { opacity: 1 },
          position: original
        },
        {
          duration: 550 + i * 70,
          easing: 'ease-out'
        }
      );
    });

    // ⭐ Pulso suave infinito
    const pulse = () => {
      cy.nodes().animate(
        { style: { 'background-opacity': 0.85 } },
        {
          duration: 1200,
          complete: () => {
            cy.nodes().animate(
              { style: { 'background-opacity': 1 } },
              {
                duration: 1200,
                complete: pulse
              }
            );
          }
        }
      );
    };
    pulse();
  }
}
