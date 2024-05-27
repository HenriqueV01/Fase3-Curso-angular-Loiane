import { Aluno } from './../aluno';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrl: './aluno-detalhe.component.css'
})
export class AlunoDetalheComponent implements OnInit{

  aluno: Aluno = new Aluno(0, '','');
  inscricao: Subscription = new Subscription;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private alunoService: AlunosService
  ){

  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');

    /*ANTIGO CÓDIGO PARA PEGAR O ALUNO QUANDO O COMPONENTE É CARREGADO, MAS AGORA USAMOS O RESOLVE PARA CARREGAR ANTES.*/
    // this.inscricao = this.route.params.subscribe(
    //   (params: any) => {
    //     let id = params['id'];
    //     this.aluno = this.alunoService.getAluno(id);
    //   }
    // );

    console.log('ngOnInit: AlunoDetalheComponent');

    this.inscricao = this.route.data.subscribe(

      (info) => {
        console.log('Recebendo o obj Aluno do Resolver');
        this.aluno = info['aluno'];
      }

    );

  }

  editarAluno() {
    //throw new Error('Method not implemented.');
    this.router.navigate(['/alunos',this.aluno.id, 'editar']);
    }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
