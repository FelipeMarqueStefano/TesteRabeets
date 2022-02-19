import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.css']
})
export class PlannerComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  verTarefa() {
    this.route.navigate(['/tarefa'])
  }

}
