import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaInicioComponent } from './tela-inicio/tela-inicio.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { TabsComponent } from './tabs/tabs.component';
import { CriarTarefaComponent } from './criar-tarefa/criar-tarefa.component';
import { PlannerComponent } from './planner/planner.component';
import { TarefaComponent } from './tarefa/tarefa.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaInicioComponent,
    TelaPrincipalComponent,
    TabsComponent,
    CriarTarefaComponent,
    PlannerComponent,
    TarefaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
