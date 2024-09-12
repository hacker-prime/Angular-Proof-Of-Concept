import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent],  // Declare the HomeComponent here
  imports: [CommonModule,
            RouterModule
  ], exports: [ // Allow other modules to use this component // The home module is declaring the home component
    HomeComponent
  ]
})
export class HomeModule { }
