import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signoff',
  templateUrl: './signoff.component.html',
  styleUrls: ['./signoff.component.css']
})
export class SignoffComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    localStorage.removeItem('name');
    localStorage.removeItem('usuario');
    localStorage.removeItem('typeUser');
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
