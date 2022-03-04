import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userId: any;
  userDetails: any;
  editUserForm: FormGroup = new FormGroup({});
  dataLoaded: boolean = false;

  constructor(private activateRoute: ActivatedRoute,
    private userService: UserService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dataLoaded = false;

    this.activateRoute.params.subscribe(
      data => {
        this.userId = data['id'];
      }
    );

    if (this.userId !== '') {
      //view user details
      this.userService.viewuser(this.userId).toPromise().then(data => {

        this.userDetails = data;
        Object.assign(this.userDetails, data);

        // Build the edit form

        this.editUserForm = this.formBuilder.group({

          'username': new FormControl(this.userDetails.name),
          'email': new FormControl(this.userDetails.email),
        })
        this.dataLoaded = true;


      })
    }
  }

  updateUser() {


    this.userService.updateUser(this.userId, this.editUserForm.value).subscribe(data => {
      console.log("User Updated"), alert("User data Updated!! ")

    }, err => {
      console.log(err);
      alert("try after some time!!")

    })


  }

}
