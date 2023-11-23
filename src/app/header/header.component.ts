import { Component } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuType :String ='default'
  route: any;
 
   
  constructor(private router :Router){}
    ngOnInit(): void{
      
      this.route.events.subscribe((val: { url: any; })=>
      {
 if(val.url){
  console.warn(val.url)
  if(localStorage.getItem('seller') && val.url.includes('seller')) {
    console.warn("in seller area")
    this.menuType ="seller"
  }
  else{
    console.warn("outside seller")
    this.menuType ='default'
  }
 }
  

      })
    }

   
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

