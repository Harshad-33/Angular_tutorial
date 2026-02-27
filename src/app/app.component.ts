import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    // name = "Harshad Porajwar";
    // user1 = "samu";
    // user2 = "samu"

    // handleClickEvent(){
    //   console.log("Function called");
    //   this.OtherFunCall();
    // }

    // OtherFunCall(){
    //   console.log("Other Function called");
    // }

    // name:string = "Harshad"
    // data:any= "2005"
    // age : string|number = 21

    // UpdateName(){
    //   this.name = "samu"
    //   this.data = 2008
    //   this.age = 17
    //   console.log(this.name,this.data,this.age);
    // }


    // // Counter application 
    // count = 0;

    // handleDecrement(){
    //   if(this.count > 0){
    //     this.count = this.count-1;
    //   }
    // }

    // handleIncrement(){
    //   this.count = this.count+1;
    // }

    // handleReset(){
    //   this.count = 0;
    // }


    // //Events in Angular
    // handleEvent(event:Event){
    //   console.log("event function called",event.type);
    //   //console.log("value",(event.target as HTMLInputElement).value);
    // }


    // Get and Set 
    name = ""
    disName = ""
    email = ""
    getName(event : Event){
      const name = (event.target as HTMLInputElement).value;
      console.log(name);
      this.name = name;
    }

    displayName(){
      this.disName = this.name;
    }

    SetName(){
      this.name = "samu"
    }

    getEmail(val : string){
      console.log(val)
      this.email = val;
    }

    setEmail(){
      this.email="default@gmail.com"
    }

}



