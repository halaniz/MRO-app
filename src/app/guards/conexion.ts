import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn:'root'
})
export class ApiRuta{
  constructor(private http:HttpClient){}


    serverUrl="https://localhost:44330/";
    //serverUrl="http://10.35.64.27:9798/";


    // headers= new HttpHeaders()
    // .set('Access-Control-Allow-Credentials' , 'true')
    // .set('Access-Control-Allow-Origin', '*')
    // .set('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, PUT, OPTIONS')
    // .set('Access-Control-Allow-Headers', 'Origin, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, X-Auth-Token');


    api(){
        return this.serverUrl;
    }

    // getMap(url:string){
    //   var urlFull= url;
    //   //var token = localStorage.getItem('userToken').replace(/['"]+/g, '');
    //   //var headers={ 'Authorization': 'Bearer  ' + token + '', 'My-Custom-Header': 'foobar' };
    //   //var headers= this.headers.append('Authorization', 'Bearer  ' + token + '').append('Content-Type',  'application/json');
    //   var headers= this.headers;

    //   try{
    //     return this.http.get(urlFull, {headers});
    //   }
    //   catch(e){
    //       this.messaggeError(e);
    //       console.log(JSON.stringify(e));
    //     };
    // }

    // postMap(url:string, values:any){
    //   var urlFull= url;
    //   var headers= headers;
    //   try{
    //     return this.http.post(urlFull, values , { headers}, );
    //   }
    //   catch(e){
    //       this.messaggeError(e);
    //       console.log(JSON.stringify(e));
    //     };
    // }


    // putMap(url:string, values:any){
    //   var urlFull= url;

    //   //var headers={ 'Authorization': 'Bearer  ' + token + '', 'My-Custom-Header': 'foobar' };
    //  // var headers= this.headers.append('Authorization', 'Bearer  ' + token + '').append('Content-Type',  'application/json');
    //  var headers= this.headers;
    //   try{
    //     return this.http.put(urlFull, values , { headers});
    //   }
    //   catch(e){
    //       this.messaggeError(e);
    //       console.log(JSON.stringify(e));
    //     };
    // }

    // deleteMap(url:string){
    //   //var headers={ 'Authorization': 'Bearer  ' + token + '', 'My-Custom-Header': 'foobar' };
    //  // var headers= this.headers.append('Authorization', 'Bearer  ' + token + '').append('Content-Type',  'application/json');
    //  var headers= this.headers;
    //   try{
    //     return this.http.delete(url,{headers});
    //   }
    //   catch(e){
    //       this.messaggeError(e);
    //       console.log(JSON.stringify(e));
    //     };
    // }


    // postFile(url:string, values:any){
    //   var urlFull= url;
    //   var token = localStorage.getItem('userToken').replace(/['"]+/g, '');
    //   var headers={ 'Authorization': 'Bearer  ' + token + '', 'My-Custom-Header': 'foobar' };
    //   try{
    //     return this.http.post(urlFull, values , { headers}, );
    //   }
    //   catch(e){
    //       this.messaggeError(e);
    //       console.log(JSON.stringify(e));
    //     };
    // }

    

    // postFormFile(url:string, values:FormData){
    //   //var token = localStorage.getItem('userToken').replace(/['"]+/g, '');
    //   //var headers={'Authorization': 'Bearer  ' + token + ''};
    //   //var headers= this.headers.append('Authorization', 'Bearer  ' + token + '');
    //   var headers= this.headers;
    //   try{
    //     return this.http.post(url, values, { headers },);
    //   }
    //   catch(e){
    //       this.messaggeError(e);
    //       console.log(JSON.stringify(e));
    //     };
    // }


    // putImage(url:string,values:any){

    //   var urlFull=url;
    //  // var token = localStorage.getItem('userToken').replace(/['"]+/g, '');
    //   var headers={ 'Authorization': 'Bearer  ' , 'My-Custom-Header': 'foobar' };

    //   try{
    //         return this.http.put(urlFull, values, {responseType: 'arraybuffer',headers:headers});
    //   }
    //   catch(e){
    //       this.messaggeError(e);
    //       console.log(JSON.stringify(e)+'CATCH');
    //       return null;
    //     };
    // }



    // messaggeError(data: any) {
    //   Swal.fire({
    //     position: 'center',
    //     icon: 'error',
    //     title: 'DATABASE ERROR',
    //     text: JSON.stringify(data),
    //     footer: '<a href="https://apps.hunterdouglas.com/SupportRequest/request" target="_blank">Report To IT Developers</a>'
    //   })
    // }
}
