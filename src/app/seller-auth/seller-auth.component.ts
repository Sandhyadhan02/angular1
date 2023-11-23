import { Component, OnInit } from '@angular/core';
import { SellService } from '../services/sell.service';
import { Router } from '@angular/router';
import { Signup } from '../data.type';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit{
  constructor( private seller:SellService, private router:Router){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  showLogin= true
 ngOnit():void {}
 signUp(data:Signup){
  
  this.seller.userSignUp(data).subscribe((result)=>{
    if(result){
      this.router.navigate(['seller-home'])

    }
    
  });
 }
 
 openLogin(){
  this.showLogin =true

 }
 openSignUp(){
  this.showLogin =false
 }

}
