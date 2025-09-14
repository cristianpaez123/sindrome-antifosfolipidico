import { Routes } from '@angular/router';
import { HomeComponent } from './presentation/pages/home/home';
import { InitialEvaluationComponent } from './presentation/pages/initial-evaluation/initial-evaluation';
import { SkinManifestations } from './presentation/pages/skin-manifestations/skin-manifestations';


export const routes: Routes = [
  { path: '', component: HomeComponent }, // Página inicial con Hero + Introduction
  { path: 'initial-evaluation', component: InitialEvaluationComponent },
{
    path: 'skin-manifestations',
    loadComponent: () =>
      import('./presentation/pages/skin-manifestations/skin-manifestations')
        .then(m => m.SkinManifestations)
  }];
