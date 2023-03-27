import { Route } from "@angular/router";
import { EventoAddComponent } from "./evento-add/evento-add.component";
import { EventoDetalleComponent } from "./evento-detalle/evento-detalle.component";
import { EventoShowComponent } from "./evento-show/evento-show.component";

export const APP_ROUTES: Route[] = [
  { path: 'eventos', component: EventoShowComponent},
  { path: 'eventos/add', component: EventoAddComponent},
  { path: 'eventos/id', component: EventoDetalleComponent},


]