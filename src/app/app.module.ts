import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { LoginappComponent } from './loginapp/loginapp.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SuggestedproductComponent } from './suggestedproduct/suggestedproduct.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { UserListComponent } from './user-list/user-list.component';
import { ChildComponent } from './child/child.component';
import { TodosComponent } from './MyComponents/todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    LoginappComponent,
    RegisterComponent,
    HeaderComponent,
    SuggestedproductComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailsComponent,
    CartComponent,
    OrderComponent,
    SellerAuthComponent,
    SellerHomeComponent,
    UserListComponent,
    ChildComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
