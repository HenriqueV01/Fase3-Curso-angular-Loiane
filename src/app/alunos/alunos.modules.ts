import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './alunos.component';
import { NgModule } from "@angular/core";
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
// import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosService } from './alunos.service';
import { AlunosDeactivateGuard } from '../guards/alunos-deactivate.guard';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';
import { AuthGuard } from '../guards/auth.guard';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    imports:[
        CommonModule,
        //AlunosRoutingModule,
        AppRoutingModule,
        FormsModule
    ],
    exports:[],
    declarations:[
        AlunosComponent,
        AlunosFormComponent,
        AlunoDetalheComponent,
    ],
    providers:[
      AlunosService,
      AlunosDeactivateGuard,
      AlunoDetalheResolver,
      AuthGuard
    ],

})
export class AlunosModule{}
