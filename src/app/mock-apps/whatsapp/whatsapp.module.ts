import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsappComponent } from './whatsapp.component';
import { I18nModule } from '@app/i18n';
import { TranslateModule } from '@ngx-translate/core';
import { WhatsappRoutingModule } from './whatsapp-routing.module';

@NgModule({
  declarations: [WhatsappComponent],
  imports: [CommonModule, WhatsappRoutingModule, TranslateModule, I18nModule],
})
export class WhatsappModule {}
