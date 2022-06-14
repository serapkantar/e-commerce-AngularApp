import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public password:string | undefined;
  public name:string | undefined;
  public errorMessage:string | undefined;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


login(form:NgForm){
  if(form.valid){

  }

}




}
