import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'products',
        component: ProductsComponent
    },
    
    {
        path: 'test',
        component: DashboardComponent
    }
];
