import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  ReactiveForm= this.formBuilder.group({
    Email: '',
    Password: ''
  });

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  onSubmit(): void {
    console.warn('Welcome')
  }
}
