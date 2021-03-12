
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
// @Injectable({
//   providedIn: 'root'
// })


//export class AuthAdminGuard implements CanActivate {

//   constructor(private router: Router) { 
//   }
  //se usa para validar si es posible entrar a una url con una respuesta boolean.
//   canActivate(
//     next: ActivatedRouteSnapshot,
    //state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    //Acceder a token desde la variable local.
    //const name: string = localStorage.getItem('name');

    //comprobamos si el token no es nulo.
//     if (name) {

//       if (!name) {
//         localStorage.removeItem('name'); // Eliminamos token de variable global.
//         this.router.navigate(['/login']); // Enviamos a login.
//         alert(name);
//         return false;
//       } else {
//         return true; // Mantenemos token y damos acceso a url.
//       }
//       // si es nulo se envia al login.
//     } else {
//       this.router.navigate(['/login']);
//     }

  // }

//}
