import { CursosService } from '../cursos.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrl: './curso-detalhe.component.css'
})
export class CursoDetalheComponent {

  id: number = 0;
  curso: any = null;
  inscricao: Subscription | undefined;

  //ActivatedRoute - objeto para recuperar a rota do componente.
  constructor(private route: ActivatedRoute,
              private cursosService: CursosService,
              private router: Router){
   //console.log(this.route);
   //this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(){
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.curso = this.cursosService.getCurso(this.id);

        if(this.curso == null){
          this.router.navigate(['/naoEncontrado'])
        }

      }
    )
  }

  ngOnDestroy(){
    this.inscricao?.unsubscribe();
  }

}
