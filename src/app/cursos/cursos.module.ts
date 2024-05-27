import { NgModule } from "@angular/core";
import { CursosComponent } from "./cursos.component";
import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { CursoNaoEncontradoComponent } from "./curso-nao-encontrado/curso-nao-encontrado.component";
import { CursosService } from "./cursos.service";
import { CommonModule } from "@angular/common";
// import { CursosRoutingModule } from "./cursos.routing.modules";
import { AuthGuard } from "../guards/auth.guard";
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
    imports: [CommonModule,
        // CursosRoutingModule
        AppRoutingModule
    ],
    exports: [],
    declarations:[
        CursosComponent,
        CursoDetalheComponent,
        CursoNaoEncontradoComponent
    ],
    providers: [CursosService, AuthGuard]
})

export class CursosModule{

}
