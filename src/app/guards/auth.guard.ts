import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log('canActivate');
    console.log(this.verificarAcesso());
    return this.verificarAcesso();
  }
  //Ao inves de usar o canLoad usei o canMatch, porém não percebi se o script desse módulo foi carregado ou não.
  //https://www.youtube.com/watch?v=SQViHeue6bs&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=71&ab_channel=LoianeGroner
  canMatch(
    route: Route,
    segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log('canMatch');
    return this.verificarAcesso();
  }

  private verificarAcesso(): boolean | UrlTree {
    if (this.authService.usuarioEstaAutenticado()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
