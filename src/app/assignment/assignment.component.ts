import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {
  // flag!:boolean;
  // setflag(){
  //   this.flag=true;
  // }
  // resetflag(){
  //   this.flag=false;
  // }
  // data:any[]=[
  //   { id:1, firstname:"Raj", lastname:"Thakur",Grade:9},
  //   { id:2, firstname:"Manisha", lastname:"Patil",Grade:6},
  //   { id:3, firstname:"Rahul", lastname:"Shinde",Grade:7 }
  // ]
  registrationForm!: FormGroup;
  countries: string[] = ['India', 'United States', 'Australia'];
  states: { [key: string]: string[] } = {
    India: ['Maharashtra', 'Uttar Pradesh', 'Madhya Pradesh', 'Karnataka'],
    'United States': ['New York', 'California', 'Texas'],
    Australia: ['New South Wales', 'Victoria', 'Queensland']
  };
  phoneAbbreviations: { [key: string]: string } = {
    India: '+91',
    'United States': '+1',
    Australia: '+61'
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
    this.onCountryChange();
  }

  createForm() {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]],
      address: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      pinCode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$')]],
      confirmPassword: ['', Validators.required]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      form.get('confirmPassword')?.setErrors({ passwordNotMatch: true });
    } else {
      form.get('confirmPassword')?.setErrors(null);
    }
  }

  onCountryChange() {
    this.registrationForm.get('country')?.valueChanges.subscribe(country => {
      const phoneAbbreviation = this.phoneAbbreviations[country];
      this.registrationForm.patchValue({ phoneNumber: phoneAbbreviation });
      this.registrationForm.get('state')?.setValue('');
    });
  }

  saveForm() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      // Perform further actions like submitting the form data to a server
    } else {
      this.markFormGroupTouched(this.registrationForm);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      } else {
        control.markAsTouched();
      }
    });
  }
}
