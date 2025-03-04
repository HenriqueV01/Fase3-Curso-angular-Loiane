import { AlunosService } from './alunos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.css'
})
export class AlunosComponent {

  alunos: any[] = [];

  constructor(private alunosService: AlunosService){

  }
  ngOnInit(){
    this.alunos = this.alunosService.getAlunos();
  }

}
