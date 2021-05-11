import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { StarpageComponent } from './starpage/starpage.component';
import { PreciosComponent } from './precios/precios.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
  { path: '', redirectTo: '/starpage', pathMatch: 'full' },
  { path: 'starpage', component: StarpageComponent },
  { path: 'precios', component: PreciosComponent }
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) // hace que las rutas funcionen en el componente principal app.component.html
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    StarpageComponent,
    PreciosComponent,
    ListaComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
