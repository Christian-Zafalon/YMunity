import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

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
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { ListboxModule } from 'primeng/listbox';
@NgModule({
  declarations: [AppComponent, PacientesComponent, SidebarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    StyleClassModule,
    ButtonModule,
    InputTextModule,
    RippleModule,
    SidebarModule,
    AvatarModule,
    AvatarGroupModule,
    TableModule,
    DropdownModule,
    RatingModule,
    TagModule,
    ListboxModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
