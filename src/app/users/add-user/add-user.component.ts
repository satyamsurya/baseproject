import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addUserForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {

    this.addUserForm = this.formBuilder.group({

      'username': new FormControl('',[Validators.required, Validators.minLength(3)]),
      'email': new FormControl('',[Validators.required, Validators.email]),
      'phone': new FormControl('',[Validators.required, Validators.maxLength(10),]),

    })
  }

  createUser() {

    this.userService.addUser(this.addUserForm.value).subscribe(data => {
      console.log("User Created"),alert("User Created ");
      this.addUserForm.reset();


    }, err => {
      console.log(err);
      alert("try after some time")

    })

  }

}
