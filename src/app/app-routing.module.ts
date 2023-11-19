import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UIModelComponent } from './uimodel/uimodel.component';
import { OCRComponent } from './ocr/ocr.component';
import { PhistoryComponent } from './phistory/phistory.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { StatisticsForAdminComponent } from './statistics-for-admin/statistics-for-admin.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'home',component:HomeComponent,title:'home'},
  {path:'login',component:LoginComponent,title:'Login'},
  {path:'register',component:RegisterComponent,title:'Register'},
  {path:'IDCard',component:OCRComponent,title:'uploadIDCard'},
  {path:'ProfileHistory',canActivate:[AuthGuard],component:PhistoryComponent,title:'ProfileHistory'},
  {path:'ForgetPassword',component:ForgetpasswordComponent,title:'ForgetPassword'},
  {path:'Admin',canActivate:[AuthGuard],component:StatisticsForAdminComponent,title:'Statistics'},
  {path:'Model',canActivate:[AuthGuard],component:UIModelComponent,title:'Model'},
 
  {path:'', redirectTo:'home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
