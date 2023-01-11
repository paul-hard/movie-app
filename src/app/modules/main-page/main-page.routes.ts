import { Routes } from "@angular/router"

export const MAINE_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./main-page.component').then(m => m.MainPageComponent),
        children: [
            {
                path: 'home',
                pathMatch: 'full',
                redirectTo: 'home'
            },
            {
                path: 'home',
                loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
            },
            {
                path: 'suggest-me',
                loadComponent: () => import('./suggest-me/suggest-me.component').then(m => m.SuggestMeComponent)
            },
            {
                path: 'movies',
                loadComponent: () => import('./muvies/muvies.component').then(m => m.MuviesComponent)
            },
            {
                path: 'tv-shows',
                loadComponent: () => import('./tv-shows/tv-shows.component').then(m => m.TvShowsComponent)
            },
        ]
    },
]