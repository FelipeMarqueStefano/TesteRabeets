import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarTarefaComponent } from './criar-tarefa/criar-tarefa.component';
import { PlannerComponent } from './planner/planner.component';
import { TabsComponent } from './tabs/tabs.component';
import { TarefaComponent } from './tarefa/tarefa.component';
import { TelaInicioComponent } from './tela-inicio/tela-inicio.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';

const routes: Routes = [
  { path: "", redirectTo: "inicio", pathMatch: "full" },
  { path: "inicio", component: TelaInicioComponent },
  { path: "", component: TabsComponent, children: [
    {path: "principal", component: TelaPrincipalComponent},
    {path: "criar-tarefa", component: CriarTarefaComponent},
    {path: "planner", component: PlannerComponent},
    {path: "tarefa", component: TarefaComponent}
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
