import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Complication {
  icon: string;
  title: string;
  description: string;
}

interface EpidemiologyStat {
  value: string;
  unit: string;
  title: string;
  description: string;
  icon?: string; // opcional (para proporción por género)
  gender?: { female: string; male: string };
}

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './introduction.html',
  styleUrls: ['./introduction.css']
})
export class IntroductionComponent {
  // 🔹 Lista de complicaciones
  complications: Complication[] = [
    { icon: 'bloodtype', title: 'Hematológicas', description: 'Trombocitopenia, trombosis venosa y arterial.' },
    { icon: 'pregnant_woman', title: 'Obstétricas', description: 'Pérdidas recurrentes del embarazo.' },
    { icon: 'psychology', title: 'Neurológicas', description: 'ACV, AIT, migraña, convulsiones, esclerosis múltiple.' },
    { icon: 'monitor_heart', title: 'Cardiovasculares', description: 'Afectación de las válvulas cardiacas.' },
    { icon: 'healing', title: 'Dermatológicas', description: 'Livedo reticularis, úlceras, necrosis, hemorragias.' },
    { icon: 'medication', title: 'Renales', description: 'Glomerulonefritis, microangiopatía trombótica renal.' },
    { icon: 'personal_injury', title: 'Ortopédicas', description: 'Fracturas no traumáticas, necrosis avascular de los huesos.' }
  ];

  // 🔹 Lista de datos de epidemiología
  epidemiology: EpidemiologyStat[] = [
    {
      value: '1-2',
      unit: '/100,000 hab.',
      title: 'Incidencia Anual',
      description: 'Nuevos casos diagnosticados cada año.'
    },
    {
      value: '40-50',
      unit: '/100,000 hab.',
      title: 'Prevalencia Total',
      description: 'Número total de personas que viven con SAF.'
    },
    {
      value: '',
      unit: '',
      title: 'Proporción por Género',
      description: 'Es el doble de común en mujeres que en hombres.',
      icon: 'gender',
      gender: { female: '2', male: '1' }
    }
  ];
}