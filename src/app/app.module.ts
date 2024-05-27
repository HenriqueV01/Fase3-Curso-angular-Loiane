import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CamelCasePipe } from './camel-case.pipe';
import { ExemploFiltroComponent } from './exemplo-filtro/exemplo-filtro.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { CursosModule } from './cursos/cursos.module';
import { AlunosModule } from './alunos/alunos.modules';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { AlunosDeactivateGuard } from './guards/alunos-deactivate.guard';

@NgModule({
  declarations: [
    AppComponent,
    CamelCasePipe,
    ExemploFiltroComponent,
    HomeComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // CursosModule,
    AlunosModule
  ],
  providers: [
    provideClientHydration(),
    AuthService,
    AuthGuard,
    AlunosGuard,
    AlunosDeactivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
