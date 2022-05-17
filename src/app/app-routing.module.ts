import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'empresa', component: EmpresaComponent},
  {path: 'articulo', component: ArticuloComponent},
  {path: 'sidebar', component: SidebarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
