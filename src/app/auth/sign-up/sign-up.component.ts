import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthValidators} from "../../shared/validators/auth-validators";
import {MatchPassword} from "../validators/match-password";
import {UniqueUsername} from "../validators/unique-username";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor (
    private matchPassword: MatchPassword,
    private uniqueUsername: UniqueUsername
  ) {}

  authForm = new FormGroup({
    username: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-zA-Z0-9]+$/)
    ],
      [this.uniqueUsername.validate]
    ),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ]),
    passwordConfirmation: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ])
  }, [
    this.matchPassword.validate,
    // AuthValidators.matchFields('password', 'passwordConfirmation'),
  ])

  onSubmit() {

  }
}
