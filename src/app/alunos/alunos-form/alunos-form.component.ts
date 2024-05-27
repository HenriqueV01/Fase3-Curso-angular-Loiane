import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { AlunosService } from '../alunos.service';
import { IFormCanDeactivate } from '../iform-candeactivate';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrl: './alunos-form.component.css'
})
export class AlunosFormComponent implements IFormCanDeactivate{

  aluno: any;
  inscricao: Subscription = new Subscription;
  private formMudou: boolean = false;

  constructor(private route: ActivatedRoute,
    private alunoService: AlunosService
  ){

  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.aluno = this.alunoService.getAluno(id);

        if(this.aluno===null){
          this.aluno = {};
        }
      }
    );
  }

  //ACIONA SE HOUVER QUALQUER ALTERAÇÃO NO INPUT
  onInput() {
    //throw new Error('Method not implemented.');
    this.formMudou = true;
  }

  podeMudarRota(){
    if(this.formMudou){
      let decisao = confirm('Deseja sair dessa página?');
      return (decisao) ? true : false;
    }
    return true;
  }

  podeDesativar() {
    return this.podeMudarRota();
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
