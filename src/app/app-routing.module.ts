import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { logging } from 'protractor';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from "./menu/menu.component";
import { QuickRequisitionComponent } from "./quick-requisition/quick-requisition.component";
import { ManagersPendingsComponent} from "./managers-pendings/managers-pendings.component";
//import { AuthAdminGuard } from './guards/auth-admin.guard';

const routes: Routes = [
 // { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'Menu', component: MenuComponent},
  { path: 'HomePage', component: HomePageComponent},
  { path: 'Login', component: LoginComponent},
  { path: 'Quickrequisition', component: QuickRequisitionComponent},
  { path: 'Managerspendings', component: ManagersPendingsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
