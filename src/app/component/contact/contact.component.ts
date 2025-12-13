import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactService } from 'src/app/service/contact.service';
import { ContactMessage } from 'src/app/model/contact.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm!: FormGroup;
  submitted = false;
  loading = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [
        Validators.required, 
        Validators.minLength(2),
        Validators.maxLength(100)
      ]],
      email: ['', [
        Validators.required, 
        Validators.email
      ]],
      message: ['', [
        Validators.required, 
        Validators.minLength(10),
        Validators.maxLength(1000)
      ]]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.successMessage = '';
    this.errorMessage = '';

    if (this.contactForm.invalid) {
      return;
    }

    this.loading = true;
    
    this.contactService.sendMessage(this.contactForm.value).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.success) {
          this.successMessage = response.message;
          this.contactForm.reset();
          this.submitted = false;
          
          // Auto-hide success message after 5 seconds
          setTimeout(() => {
            this.successMessage = '';
          }, 5000);
        }
      },
      error: (error) => {
        this.loading = false;
        console.error('Contact form error:', error);
        
        if (error.error && error.error.errors) {
          const errors = error.error.errors;
          this.errorMessage = Object.values(errors).join(', ');
        } else if (error.error && error.error.message) {
          this.errorMessage = error.error.message;
        } else {
          this.errorMessage = 'Failed to send message. Please try again later.';
        }
        
        // Auto-hide error message after 5 seconds
        setTimeout(() => {
          this.errorMessage = '';
        }, 5000);
      }
    });
  }

  resetForm(): void {
    this.contactForm.reset();
    this.submitted = false;
    this.successMessage = '';
    this.errorMessage = '';
  }
}
