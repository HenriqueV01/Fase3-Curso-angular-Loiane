import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-filtro',
  templateUrl: './exemplo-filtro.component.html',
  styleUrl: './exemplo-filtro.component.css'
})
export class ExemploFiltroComponent {

  cursos: string[] = ['Java', 'Angular'];

  filtro: string = '';

  addCurso(value: any){
    this.cursos.push(value);
  }

  obterCurso(){
    if (this.cursos.length === 0 || this.filtro === undefined || this.filtro.trim() === ''){
      return this.cursos;
    }
    return this.cursos.filter( (curso)=> {
      if (curso.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0){ //Essa parte do código é a condição do filter()
        return  true;
      }
      return false
    } )
  }

}
