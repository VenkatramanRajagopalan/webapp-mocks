import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { APP_ROUTES } from './@core/app-routes.constants';

const routes: Routes = [
  Shell.childRoutes([
    { path: APP_ROUTES.ABOUT, loadChildren: () => import('./about/about.module').then((m) => m.AboutModule) },
  ]),
  {
    path: APP_ROUTES.MOCK_APP,
    loadChildren: () =>
      import('./mock-app-container/mock-app-container-routing.module').then((m) => m.MockAppContainerRoutingModule),
  },
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
