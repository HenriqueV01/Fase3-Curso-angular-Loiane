import { CursosModule } from './cursos/cursos.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from './guards/auth.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { CursosComponent } from './cursos/cursos.component';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunoDetalheComponent } from './alunos/aluno-detalhe/aluno-detalhe.component';
import { AlunosFormComponent } from './alunos/alunos-form/alunos-form.component';
import { AlunoDetalheResolver } from './alunos/guards/aluno-detalhe.resolver';
import { AlunosDeactivateGuard } from './guards/alunos-deactivate.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

const appRoutes: Routes = [
    //{ path: 'curso', loadChildren: () => import('./cursos/cursos.module').then(mod=>mod.CursosModule)}, //LAZYLOADING (CARREGAMENTO SOB DEMANDA)
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },

    { path: 'cursos', component: CursosComponent, canActivate: [AuthGuard] },
    { path: 'curso/:id', component: CursoDetalheComponent, canActivate: [AuthGuard] },
    { path: 'naoEncontrado', component: CursoNaoEncontradoComponent, canActivate: [AuthGuard] },

    { path: 'alunos', component: AlunosComponent,
    canActivate: [AuthGuard],
    //canLoad: [AuthGuard],
    canMatch: [AuthGuard],
      children:[
        { path: 'novo', component: AlunosFormComponent },
        { path: ':id', component: AlunoDetalheComponent,
            resolve: { aluno: AlunoDetalheResolver }
        },
        { path: ':id/editar', component: AlunosFormComponent,
            canDeactivate: [ AlunosDeactivateGuard ]
        }
    ],
    canActivateChild: [AlunosGuard]
  },

    { path: '**', component: PaginaNaoEncontradaComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
