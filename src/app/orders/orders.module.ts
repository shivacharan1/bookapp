import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderRoutingModule } from './orders-routing.module';
import { ListOrdersComponent } from '../list-orders/list-orders.component';
import { MyOrdersComponent } from '../my-orders/my-orders.component';


@NgModule({
  declarations: [
    
    ListOrdersComponent,
    MyOrdersComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class OrderModule { }