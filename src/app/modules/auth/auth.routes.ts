import { Routes } from "@angular/router";


export const AUTH_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./login-page.component').then(mod => mod.LoginPageComponent),
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'sign-in'
            },
            {
                path: 'sign-in',
                loadComponent: () => import('./children/sign-in/sign-in.component').then(mod => mod.SignInComponent)
            },
            {
                path: 'sign-up',
                loadComponent: () => import('./children/sign-up/sign-up.component').then(mod => mod.SignUpComponent)
            }
        ]
    }
]