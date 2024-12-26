import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CustomerService } from '../../services/customer.service';
import { error } from 'console';

@Component({
  selector: 'app-customer-create',
  imports: [
  MatButtonModule,
    RouterLink,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  templateUrl: './customer-create.component.html',
  styleUrl: './customer-create.component.css'
})
export class CustomerCreateComponent implements OnInit{
  private customerService = inject(CustomerService);

  
  form!: FormGroup;
  router = inject(Router);

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      phone: new FormControl('',Validators.required)
    });
  }

 
  onSubmit(){
    //validate the form
    if(this.form.valid){
      this.customerService.post(this.form.value).subscribe(
        data =>{
          console.log('data posted');
          this.router.navigate(['/']);
        },
        error =>{
          console.error('error:', error);
        }
      )
    }
  }

}