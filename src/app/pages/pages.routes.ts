import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';


import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaisComponent } from './forms/pais/pais.component';
import { PaisesComponent } from './manage/paises/paises.component';
const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [ AuthGuard],
        children: [
            {
                path: 'admin',
                component: PaisesComponent,
                canActivate: [ AuthGuard],
                data: { titulo: 'Dashboard', }
            },
            { path: 'paises',canActivate: [AuthGuard], component: PaisesComponent},
            { path: 'pais/create',canActivate: [AuthGuard], component: PaisComponent},
            { path: 'pais/edit/:id',canActivate: [AuthGuard], component: PaisComponent},

            { path: '', redirectTo: '/admin', pathMatch: 'full'},
        ]
    }
];


export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
