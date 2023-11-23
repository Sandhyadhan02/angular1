import { Component } from '@angular/core';
import { FormGroup, NgForm, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  repassword:string='none';
  constructor(){

  }
  ngonit():void{

  }
  registerform =new FormGroup({
    firstname: new FormControl("",[Validators.required, Validators.minLength(2), Validators.pattern("[a-zA_Z].*")]),
    lastname: new FormControl("",[Validators.required, Validators.minLength(2), Validators.pattern("[a-zA_Z].*")]),
    gender: new FormControl("",[Validators.required]),
    adhaarnumber: new FormControl("",[Validators.required]),
    pannumber: new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.required,  Validators.minLength(3), Validators.maxLength(16),]),
    repassword: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required,  Validators.email]),
    mobile: new FormControl("",[Validators.required,  Validators.minLength(2), Validators.maxLength(10),Validators.pattern("[0-9]*")]),
    emailotp: new FormControl("",[Validators.required]),
    mobileotp: new FormControl("",[Validators.required])
  });
  userData:any={};
  getData(data: NgForm){
    if(this.password.value==this.Repaasword.value){
      console.warn("data");
      this.userData=data

    }
    else{
      this.repassword ='inline';
    }
    console.log(this.registerform.get("firstname"));
  }
  get FirstName():FormControl{
    return this.registerform.get("firstname") as FormControl;
  }
  get LastName():FormControl{
    return this.registerform.get("lastname") as FormControl;
  }
  get Gender():FormControl{
    return this.registerform.get("gender") as FormControl;
  }
  get Adhaar():FormControl{
    return this.registerform.get("adhaarnumber") as FormControl;
  }
  get Pan():FormControl{
    return this.registerform.get("pannumber") as FormControl;
  }
  get  password():FormControl{
    return this.registerform.get("password") as FormControl;
  }
  get Repaasword():FormControl{
    return this.registerform.get("repassword") as FormControl;
  }
  get Email():FormControl{
    return this.registerform.get("email") as FormControl;
  }
  get  Mobile():FormControl{
    return this.registerform.get("mobile") as FormControl;
  }
  get  EmailOtp():FormControl{
    return this.registerform.get("emailotp") as FormControl;
  }
  get  MobileOtp():FormControl{
    return this.registerform.get("mobileotp") as FormControl;
  }

}
