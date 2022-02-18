import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tela-inicio',
  templateUrl: './tela-inicio.component.html',
  styleUrls: ['./tela-inicio.component.css']
})
export class TelaInicioComponent implements OnInit {
  clicked_value: number = 0;
  cadastrar: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  show() {
    if(this.clicked_value == 1) {
      this.clicked_value = 0
    } else {
      this.clicked_value = 1;
    }
  }

  cadastro() {
    if(this.cadastrar == false) {
      this.cadastrar = true;
    }
    else {
      this.cadastrar = false;
    }
  }

  entrar() {
    this.router.navigate(['/principal'])
  }
}
