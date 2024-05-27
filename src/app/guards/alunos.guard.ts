import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AlunosGuard implements CanActivateChild{

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        //throw new Error("Method not implemented.");

        console.log('AlunosGuard : guarda de rota filha.');

        if(state.url.includes('editar')){
            //alert('Usuário sem acesso!');
            //return false;
        }

        return true;
    }



}
