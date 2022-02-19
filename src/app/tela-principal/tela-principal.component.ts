import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrls: ['./tela-principal.component.css']
})
export class TelaPrincipalComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  verTarefa() {
    this.route.navigate(['/tarefa'])
  }
}
