import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { logging } from 'protractor';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from "./menu/menu.component";
import { QuickRequisitionComponent } from "./quick-requisition/quick-requisition.component";
import { ManagersPendingsComponent} from "./managers-pendings/managers-pendings.component";
import { ControllerPendingsComponent } from "./controller-pendings/controller-pendings.component";
import { EditarPoComponent} from "./editar-po/editar-po.component";
import { PurchaseApprovedComponent} from "./purchase-approved/purchase-approved.component";
import { PurchaseOrdersComponent} from "./purchase-orders/purchase-orders.component";
import { PassMroComponent} from "./pass-mro/pass-mro.component";
import { AddProvidersComponent} from "./add-providers/add-providers.component";
import { ModProvidersComponent} from "./mod-providers/mod-providers.component";
import { UsuariosAddComponent} from "./usuarios-add/usuarios-add.component";
import { UsuariosModComponent} from "./usuarios-mod/usuarios-mod.component";
import { UsuarioJefesComponent} from "./usuario-jefes/usuario-jefes.component";
//import { AuthAdminGuard } from './guards/auth-admin.guard';

const routes: Routes = [
 // { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'Menu', component: MenuComponent},
  { path: 'HomePage', component: HomePageComponent},
  { path: 'Login', component: LoginComponent},
  { path: 'Quickrequisition', component: QuickRequisitionComponent},
  { path: 'Managerspendings', component: ManagersPendingsComponent},
  { path: 'Controllerpendings', component: ControllerPendingsComponent},
  { path: 'Editarpo', component: EditarPoComponent},
  { path: 'Purchaseapproved', component: PurchaseApprovedComponent},
  { path: 'Purchaseorders' , component: PurchaseOrdersComponent},
  { path: 'Passmro' , component: PassMroComponent},
  { path: 'Addproviders', component: AddProvidersComponent},
  { path: 'Modproviders', component: ModProvidersComponent},
  { path: 'Usuariosadd', component: UsuariosAddComponent},
  { path: 'Usuariosmod', component: UsuariosModComponent},
  { path: 'Usuariojefes', component: UsuarioJefesComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
