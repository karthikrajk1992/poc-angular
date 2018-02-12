import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ServerService} from './server.service';
import { HeaderComponent } from './header/header.component';
import { SectionBannerComponent } from './section-banner/section-banner.component';
import { SectionHowWorksComponent } from './section-how-works/section-how-works.component';
import { SectionCardComponent } from './section-card/section-card.component';
import { SectionFooterComponent } from './section-footer/section-footer.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionBannerComponent,
    SectionHowWorksComponent,
    SectionCardComponent,
    SectionFooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]

})
export class AppModule { }
