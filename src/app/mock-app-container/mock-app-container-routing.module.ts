import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MockAppContainerComponent } from './mock-app-container.component';

const routes: Routes = [{ path: '', component: MockAppContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class MockAppContainerRoutingModule {}
