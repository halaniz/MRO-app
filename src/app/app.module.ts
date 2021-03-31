import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuickRequisitionComponent } from './quick-requisition/quick-requisition.component';
import { MenuComponent } from './menu/menu.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignoffComponent } from './signoff/signoff.component';
import { ManagersPendingsComponent } from './managers-pendings/managers-pendings.component';
import { ControllerPendingsComponent } from './controller-pendings/controller-pendings.component';
import { EditarPoComponent } from './editar-po/editar-po.component';
import { PurchaseApprovedComponent } from './purchase-approved/purchase-approved.component';
import { PurchaseOrdersComponent } from './purchase-orders/purchase-orders.component';
import { PassMroComponent } from './pass-mro/pass-mro.component';


@NgModule({
  declarations: [
    AppComponent,
    QuickRequisitionComponent,
    MenuComponent,
    HomePageComponent,
    LoginComponent,
    SignoffComponent,
    ManagersPendingsComponent,
    ControllerPendingsComponent,
    EditarPoComponent,
    PurchaseApprovedComponent,
    PurchaseOrdersComponent,
    PassMroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
