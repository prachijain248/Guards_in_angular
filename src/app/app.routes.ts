import { Routes } from '@angular/router';
import { authGuard} from './guards/auth/auth.guard';
import { roleGuard} from './guards/role/role.guard';
import { unsavedChangesGuard} from './guards/unsaved-changes/unsaved-changes.guard';
import { adminsOnlyGuard } from './guards/admins-only/admins-only.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard/reports',
        pathMatch: 'full'
    },
    { path: 'login', 
        loadComponent: () => import('./pages/login/login.component').then(c => c.LoginComponent)
    },
    {   path: 'dashboard', 
        loadComponent: () => import('./pages/dashboard/dashboard.component').then(c => c.DashboardComponent),
        canActivate: [authGuard],
        canActivateChild: [roleGuard],
        children: [
            {
                path : 'reports',
                data: {role: 'manager'},
                loadComponent: () => import('./pages/dashboard/reports/reports.component').then(c => c.ReportsComponent)
            },
            {
                path : 'projects',
                data: {role: 'manager'},
                children: [
                    {
                        path : '',
                        loadComponent: () => import('./pages/dashboard/projects/projects.component').then(c => c.ProjectsComponent),
                       
                    },
                    {
                        path : ':id/edit',
                        loadComponent: () => import('./pages/dashboard/projects/edit-projects/edit-projects.component').then(c => c.EditProjectsComponent),
                        canDeactivate: [unsavedChangesGuard]
                    },
                ]
            },
        ]
    },
    { path: 'settings', 
        loadComponent: () => import('./pages/settings/settings.component').then(c => c.SettingsComponent),
        canMatch: [adminsOnlyGuard]
    },
    {
        path: "**",
        redirectTo: '/login',
    }
];
