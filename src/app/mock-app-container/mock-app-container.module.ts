import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockAppContainerComponent } from './mock-app-container.component';
import { MockAppContainerRoutingModule } from './mock-app-container-routing.module';

@NgModule({
  declarations: [MockAppContainerComponent],
  imports: [CommonModule, MockAppContainerRoutingModule],
})
export class MockAppContainerModule {}
