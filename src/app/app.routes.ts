import { Routes } from '@angular/router';
import { HomeComponent } from './presentation/pages/home/home';
import { InitialEvaluationComponent } from './presentation/pages/initial-evaluation/initial-evaluation';
import { SkinManifestations } from './presentation/pages/skin-manifestations/skin-manifestations';
import {LocalManagementProtocol} from './presentation/pages/local-management-protocol/local-management-protocol'
import {SystemicManagement} from './presentation/pages/systemic-management/systemic-management'
import {EducationMonitoring} from './presentation/pages/education-monitoring/education-monitoring'


export const routes: Routes = [
  { path: '', component: HomeComponent }, // Página inicial con Hero + Introduction
  { path: 'initial-evaluation', component: InitialEvaluationComponent },
{
    path: 'skin-manifestations',
    loadComponent: () =>
      import('./presentation/pages/skin-manifestations/skin-manifestations')
        .then(m => m.SkinManifestations)
  },
  {
    path: 'differential-diagnosis',
    loadComponent: () =>
      import('./presentation/pages/differential-diagnosis/differential-diagnosis')
        .then(m => m.DifferentialDiagnosis)
  },
   {
    path: 'local-management-protocol',
    loadComponent: () =>
      import('./presentation/pages/local-management-protocol/local-management-protocol')
        .then(m => m.LocalManagementProtocol)
  },
  {
    path: 'systemic-management',
    loadComponent: () =>
      import('./presentation/pages/systemic-management/systemic-management')
        .then(m => m.SystemicManagement)
  },
   {
    path: 'education-monitoring',
    loadComponent: () =>
      import('./presentation/pages/education-monitoring/education-monitoring')
        .then(m => m.EducationMonitoring)
  }];
