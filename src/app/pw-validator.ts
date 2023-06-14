import { AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordValidator( control: AbstractControl): ValidationErrors | null{
    const confirmPassword = control.value ;
    const password = control.root.get('password')?.value ;   
    // console.log(password,confirmPassword);
    if(confirmPassword != "" && (password != confirmPassword)){
        return {"passwordMismatch":true};
    }else {
        return null ;
    }   
}