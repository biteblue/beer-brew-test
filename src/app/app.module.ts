import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeersComponent } from './components/beers/beers.component';
import { GridComponent } from './components/grid/grid.component';
import { AccordionComponent } from './components/shared/accordion/accordion.component';
import { WordlimitPipe } from './transform/wordlimit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BeersComponent,
    GridComponent,
    AccordionComponent,
    WordlimitPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
