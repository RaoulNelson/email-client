import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  //@ts-ignore
  @Input() control: FormControl;
  @Input() label: string = '';
  @Input() inputType: string =''


  showErrors() {
    // return this.control.errors && this.control.touched && this.control.dirty
    const { touched, dirty, errors } = this.control;
    return touched && dirty && errors;
  }
}
