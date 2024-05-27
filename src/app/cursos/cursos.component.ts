import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from './cursos.service';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {

  cursos: any[] = [];
  pagina: number = 0;
  inscricao: Subscription = new Subscription;

  constructor(
    private cursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router
  ){

  }

  ngOnInit(){
    this.cursos = this.cursosService.getCursos();

    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
    );

  }

  proximaPagina(){    
    this.router.navigate(['/cursos'], {queryParams:{'pagina':++this.pagina}});

  }

  ngOnDestroy(){
   this.inscricao.unsubscribe();
  }

}
