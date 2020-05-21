import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  submittedData: any;
  constructor() { }

  detailsForm: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^[+ ](\d{1})\((\d{3})\)[- ]?(\d{3})[- ](\d{4})$/)])
    //we can customize regex, i make () & - optional in below commented regex
    //    /^[+ ](\d{1})\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
    //commented regex supports 3 formats +1(202)123-4567 && +1202123-4567 && +1(202)123-4567
   });


  ngOnInit() {
  }

  onSubmit(){
    if (this.detailsForm.valid) {
      let formData= this.detailsForm.value;
      this.submittedData= {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone
      }
    }
  }

}
