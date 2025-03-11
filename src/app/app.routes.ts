import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { LaptopComponent } from './laptop/laptop.component';
import { UserManagementComponent } from './user-management/user-management.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, // 👈 Wraps the children
    children: [
      { path: '', component: HomeComponent }, // Default route (Home)
      { path: 'laptop', component: LaptopComponent }, // Laptop Page
      { path: 'user-management', component: UserManagementComponent } // User Management Page
    ]
  }
];
