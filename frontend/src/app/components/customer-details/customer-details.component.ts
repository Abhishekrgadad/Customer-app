import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer.model';
import { error } from 'console';
import { coerceStringArray } from '@angular/cdk/coercion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-details',
  imports: [
    CommonModule
  ],
  
templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent {

  private activatedRouter = inject(ActivatedRoute);
  private customerService = inject(CustomerService);

  customer!: Customer;
  customerId!: string;
  ngOnInit(): void{
    //get the customer from the url
    this.customerId = this.activatedRouter.snapshot.params['id'];
    if(this.customerId){
      //get customer info
      this.customerService.getById(this.customerId).subscribe(
        data=>{
          this.customer = data;
        },
        error=>{
          console.error('error:',error);
        }
      )
    }
    console.log('customerId:', this.customerId)
  }
}
