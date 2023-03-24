import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventoShowComponent } from './evento-show/evento-show.component';
import { EventoFiltroPipe } from './pipes/evento-filtro.pipe';
import { EventoItemComponent } from './evento-item/evento-item.component';
import { EventoAddComponent } from './evento-add/evento-add.component';
import { EventosService } from './servicios/eventos.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseUrlInterceptor } from 'src/interceptores/base-url.interceptor';
import { WelcComponent } from './welc/welc.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    EventoShowComponent,
    EventoFiltroPipe,
    EventoItemComponent,
    EventoAddComponent,
    WelcComponent,
    ProductoDetalleComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [
    EventosService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
