import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {path: 'login',component:LoginComponent},
    { path: 'books', component: BookComponent, canActivate:[LoginGuardService] },
    { path: 'dashboard', component: DashboardComponent},       
    { path: 'detail/:id', component: BookDetailComponent},    
    { path: '**', component: PageNotFoundComponent },
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
