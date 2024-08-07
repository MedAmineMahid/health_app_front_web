
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent  {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: ['Nathaniel'],
      lastName: ['Poole'],
      phone: ['+1800-000'],
      email: ['nathaniel.poole@microsoft.com'],
      city: ['Bridgeport'],
      state: ['WA'],
      postcode: ['31005'],
      country: ['United States']
    });
  }


  onSubmit() {
    console.log(this.profileForm.value);
    // Handle form submission
  }
}
