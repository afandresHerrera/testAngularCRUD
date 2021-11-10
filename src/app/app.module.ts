
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'  
import { ReactiveFormsModule} from '@angular/forms' 
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateEmpleadosComponent } from './components/create-empleados/create-empleados.component';
import { ListEmpleadosComponent } from './components/list-empleados/list-empleados.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListEmpleadosComponent,
    CreateEmpleadosComponent,
    CreateEmpleadosComponent,
    NavbarComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
