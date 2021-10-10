import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_ROUTES } from '@app/@core/app-routes.constants';
import { MockAppContainerComponent } from './mock-app-container.component';

const routes: Routes = [
  {
    path: '',
    component: MockAppContainerComponent,
    children: [
      {
        path: APP_ROUTES.WHATSAPP,
        loadChildren: () => import('../mock-apps/whatsapp/whatsapp.module').then((m) => m.WhatsappModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class MockAppContainerRoutingModule {}
