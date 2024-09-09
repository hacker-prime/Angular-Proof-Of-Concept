import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SalaryModule } from './salary/salary.module';

@NgModule({
  declarations: [
    AppComponent  // The main/root component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  // Import the AppRoutingModule
    HomeModule,        // Import feature modules
    SalaryModule       // Import other feature modules
  ],
  providers: [],
  bootstrap: [AppComponent]  // Bootstraps the root component
})
export class AppModule { }
