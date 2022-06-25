import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
//Add required imports


const routes: Routes = [
  //configure the routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
