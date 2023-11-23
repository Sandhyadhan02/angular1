import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Signup, login } from '../data.type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SellService {
  // reloadseller() {
  //   throw new Error('Method not implemented.');
  // }
  // isSellerLoggedIn =new BehaviorSubject<boolean>(false);
  // userSignUp(data: Signup) {
  //   throw new Error('Method not implemented.');
  // }

  constructor(private http:HttpClient, private router:Router) 
   { }
   userSignUp(data:any){
  return this.http.post('http://localhost:3000/seller',data)
     
   }
  // userSignup(data:Signup){
  //   this.http.post('http://localhost:3000/seller',
  //   data,
  //   {observe:'response'}).subscribe((result)=>
  //   {
  //     console.warn(result)
  //       if(result){
  //         localStorage.setItem('sell',JSON.stringify(result.body))
  //         this.router.navigate(['seller-home'])
  //       }
      
       
  //   })
    
    
  // }
  // reloadSeller(){
  //   if(localStorage.getItem('seller')){
  //      this.isSellerLoggedIn.next(true);
  //      this.router.navigate(['seller-home'])
  //   }
  // }
//   userLogin(data:login){
// console.warn(data)
// this.http.get('')
// //api call code will be them
//   }
}
