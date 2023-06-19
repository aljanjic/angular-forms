import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') singUpForm: NgForm;

  defaultQuestion = 'teacher';
  answer = '';
  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.singUpForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // })

    this.singUpForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
    console.log('Sugestion clicked')
  }


  onSubmit(){
    console.log(this.singUpForm)
  }

  // onSubmit(form: NgForm){
  //   console.log(form)
  // }
}


