import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , LoginComponent , ProfileComponent],
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
    // name = ""
    // disName = ""
    // email = ""
    // getName(event : Event){
    //   const name = (event.target as HTMLInputElement).value;
    //   console.log(name);
    //   this.name = name;
    // }

    // displayName(){
    //   this.disName = this.name;
    // }

    // SetName(){
    //   this.name = "samu"
    // }

    // getEmail(val : string){
    //   console.log(val)
    //   this.email = val;
    // }

    // setEmail(){
    //   this.email="default@gmail.com"
    // }


    // Control flow statement in Angualr[2:31:14]
    // display = true;
    // x = 10;

    // hide(){
    //   this.display = false;
    // }

    // show(){
    //   this.display = true;
    // }

    // toggle(){
    //   this.display = !this.display;
    // }
    
    // toggletwo = true;
    // toggletwodiv(){
    //   this.toggletwo = !this.toggletwo;
    // }


    // Else if control Flow statement
    // color = 5;

    // handleColor(val:number){
    //   this.color = val;
    // }

    // handleInput(event:Event){
    //   this.color = parseInt((event.target as HTMLInputElement).value);
    // }


    // Switch Case in Angular
    // color = 'green';

    // handleColor(val:string){
    //   this.color = val;
    // }
    // changeColor(event:Event){
    //   this.color = (event.target as HTMLInputElement).value;
    // }



    // For loop in Angular
    // users = ["Harshad","Samiksha","alien","Ram"];

    // students = [
    //   {name : 'samu ',age:17,email:' samu@123'},
    //   {name : 'alien ',age:17,email:' alien@123'},
    //   {name : 'harsh ',age:21,email:' harsh@123'},
    //   {name : 'ram ',age:21,email:' ram@123'},
    // ]

    // getName(name:string){
    //   console.log(name);
    // }


    

    // signals in Angular
    count = signal(10);
    x=20;

    constructor(){
      effect(()=>{
        console.log(this.count());
      })
    }

    updateValue(){
      this.count.set(this.count()+1);
      this.x = 100;
    }


}



