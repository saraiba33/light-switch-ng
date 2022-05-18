import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LightComponent } from './light/light.component';
import { SwitchComponent } from './switch/switch.component';
import { NightlightComponent } from './nightlight/nightlight.component';

@NgModule({
  declarations: [
    AppComponent,
    LightComponent,
    SwitchComponent,
    NightlightComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
