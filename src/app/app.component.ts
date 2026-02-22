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

    handleClickEvent(){
      console.log("Function called");
      this.OtherFunCall();
    }

    OtherFunCall(){
      console.log("Other Function called");
    }

    name:string = "Harshad"
    data:any= "2005"
    age : string|number = 21

    UpdateName(){
      this.name = "samu"
      this.data = 2008
      this.age = 17
      console.log(this.name,this.data,this.age);
    }

}



