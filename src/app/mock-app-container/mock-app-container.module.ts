import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockAppContainerComponent } from './mock-app-container.component';
import { MockAppContainerRoutingModule } from './mock-app-container-routing.module';
import { I18nModule } from '@app/i18n';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [MockAppContainerComponent],
  imports: [CommonModule, MockAppContainerRoutingModule, TranslateModule, I18nModule],
})
export class MockAppContainerModule {}
