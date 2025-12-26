import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactiveforms.component.html',
  styleUrl: './reactiveforms.component.scss'
})
export class ReactiveformsComponent {

  // Define the structure of the form
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required)
  });

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
      // Here you would call your Service: this.userService.sendMessage(this.contactForm.value);
      this.contactForm.reset(); // Clear the form after success
    }
  }

}
