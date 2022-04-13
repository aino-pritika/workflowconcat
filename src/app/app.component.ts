import { Component } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workflow-concat';
  

   public addCusForm: FormGroup;

  fullname:any;
 constructor(private fb: FormBuilder) {

 }

 public ngOnInit() {
     this.addCusForm = this.fb.group({
      firstname: [null, [Validators.required]],
      lastname: [null, [Validators.required]]
      });
 }

  public onaddUser() {
    console.log("addCusForm",this.addCusForm.value);
    this.fullname =this.addCusForm.value.firstname + this.addCusForm.value.lastname;

    //you can do your add logics starts here
  }

}
