import { Component, inject, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit{
  //inject the customer service
  private customerService = inject(CustomerService);

  ngOnInit(): void {
    this.customerService.get().subscribe(
      data =>{
          console.log('customers:',data);
      },
      error =>{
        console.error('error:', error);
      }
    );
  }

}
