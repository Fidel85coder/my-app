import { Routes } from '@angular/router';
import { Lista } from './components/lista/lista';
import { Calculadora } from './components/calculadora/calculadora'
import { ImagenComponent } from './components/imagen-component/imagen-component'

export const routes: Routes = [
    { path: '', component: Lista },
    { path: 'calculadora', component: Calculadora },
    { path: 'imagen', component: ImagenComponent },
];
