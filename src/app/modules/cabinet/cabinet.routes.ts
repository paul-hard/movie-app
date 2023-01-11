import { Routes } from "@angular/router";


export const CABINET_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./cabinet.component').then(mod => mod.CabinetComponent),
        children: [
            {
                path: 'cabinet',
                pathMatch: 'full',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                loadComponent: () => import('./dashboard/dashboard.component').then(mod => mod.DashboardComponent)
            },
            {
                path: 'add',
                loadComponent: () => import('./add/add.component').then(mod => mod.AddComponent),
            },
            {
                path: 'suggestions',
                loadComponent: () => import('./suggestions/suggestions.component').then(mod => mod.SuggestionsComponent),
            }
        ]
    }
]