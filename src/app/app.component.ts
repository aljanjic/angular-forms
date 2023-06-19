import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') singedUpForm: NgForm;

  defaultQuestion = 'pet';

  answer = '';

  suggestUserName() {
    const suggestedName = 'Superuser';
  }


  onSubmit(){
    console.log(this.singedUpForm)
  }

  // onSubmit(form: NgForm){
  //   console.log(form)
  // }
}


