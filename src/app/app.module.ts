import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UIModelComponent } from './uimodel/uimodel.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OCRComponent } from './ocr/ocr.component';
import { PhistoryComponent } from './phistory/phistory.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { StatisticsForAdminComponent } from './statistics-for-admin/statistics-for-admin.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UIModelComponent,
    OCRComponent,
    PhistoryComponent,
    ForgetpasswordComponent,
    StatisticsForAdminComponent,
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
