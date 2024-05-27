
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AlunosFormComponent } from "../alunos/alunos-form/alunos-form.component";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IFormCanDeactivate } from "../alunos/iform-candeactivate";

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {
  canDeactivate(component: IFormCanDeactivate, route: ActivatedRouteSnapshot, state: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    //throw new Error("Method not implemented.");

    //return component.podeMudarRota();

    console.log('AlunosDeactivateGuard');

    return component.podeDesativar();

  }

}
