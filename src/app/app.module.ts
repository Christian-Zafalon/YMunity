import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacientesComponent } from './Pages/pacientes/pacientes.component';
import { SidebarComponent } from './Shared/sidebar/sidebar.component';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { TableModule } from 'primeng/table';
import { ProductService } from './Service/productservice';
@NgModule({
  declarations: [AppComponent, PacientesComponent, SidebarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StyleClassModule,
    ButtonModule,
    InputTextModule,
    RippleModule,
    SidebarModule,
    AvatarModule,
    AvatarGroupModule,
    TableModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
