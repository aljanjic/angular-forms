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
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  }

  formSubmitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';

    // Setting the form data

    // this.singUpForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // })

    // Patching form data
    this.singUpForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
    console.log('Sugestion clicked')
  }


  onSubmit(){
    this.formSubmitted = true;
    this.user.username = this.singUpForm.form.value.userData.username;
    this.user.email = this.singUpForm.form.value.userData.email;
    this.user.secretQuestion = this.singUpForm.form.value.secret;
    this.user.answer = this.singUpForm.form.value.questionAnswer;
    this.user.gender = this.singUpForm.form.value.gender;

    this.singUpForm.reset()
  }

  // onSubmit(form: NgForm){
  //   console.log(form)
  // }
}


