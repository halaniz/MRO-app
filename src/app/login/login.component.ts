import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiRuta } from 'src/app/guards/conexion';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // user: String
  // password: String
  // resultng: String
  // token: String
  isLoginError: boolean = false;
  /*Metodo principal, valida que no haya un token creado, si el token existe no deja acceder al login 
  hasta que dicho token haya expirado, esto para no acceder al servidor innecesariamente.*/
  constructor(private http: HttpClient, private router: Router, public apiruta:ApiRuta) {
    // const token: string = localStorage.getItem('userToken');
    // const userBadge: string = localStorage.getItem('userBadge');
    // if (token && userBadge) {
    //   this.router.navigate(['/app-home']);
    // }
  }
  ngOnInit() {
    // document.getElementById('user').click();
  }
  //Metodo post, envia usuario y passwors a nuestra api y recupera un token. 
  postData() {
    var values = {
      // "usuario" : this.user.toString().toUpperCase(),
      // "Password": this.password.toUpperCase(),
    };
    var url = this.apiruta.serverUrl + 'api/Login';
    // this.apiruta.postMap(url, values).toPromise().then((data: any) => {
      // if (data[0].name != 0 && data[0].msj!='Wrong User') {
      //   localStorage.setItem('usuario',  this.user.toString().toUpperCase());
      //   localStorage.setItem('name',  data[0].name);
      //   localStorage.setItem('typeUser',  data[0].type_user);
      //   this.router.navigate(['/Home']);
      // }
      // else {
      //   this.messaggeError();
      // }

    // },//cualquier error, respuestas 400, se envia un mensaje de Error al usuario.
  //     (err: HttpErrorResponse) => {
  //       console.log(JSON.stringify(err));
  //     });
 }


  messaggeError() {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Oops...',
      text: 'Incorrect Username or Password!',
      footer: '<a href="https://apps.hunterdouglas.com/SupportRequest/request" target="_blank">Report To IT Developers</a>'
    })
  }

  messageSuccess() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'It has been successfully accessed.',
      showConfirmButton: false,
      timer: 1500
    })
  }

}

