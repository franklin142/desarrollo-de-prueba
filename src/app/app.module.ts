import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MiOshitaComponent } from './mi-oshita/mi-oshita.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, MiOshitaComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
