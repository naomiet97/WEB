import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { IProduct } from '../interfaces/i-product';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private productosURL = 'productos';
  productoHijo: any;

  constructor(private http: HttpClient) {}

  getProductos(): Observable<IProduct[]> {
    return this.http
      .get<{ productos: IProduct[]; ok: boolean }>(this.productosURL)
      .pipe(map((response) => response.productos));
  }

  modificarEstrella(
    idProducto: number,
    cantidadEstrellas: number
  ): Observable<boolean> {
    return this.http
      .put<{ productos: boolean; ok: boolean; error?: string }>(
        this.productosURL + '/rating/' + idProducto,
        { rating: cantidadEstrellas }
      )
      .pipe(
        map((respuesta) => {
          console.log('Servidor-Productos: ' + respuesta.productos);
          if (!respuesta.ok) {
            throw respuesta.error;
          }
          return true;
        }),
        catchError((respuesta: HttpErrorResponse) =>
          throwError(
            () =>
              new Error(
                'Error al modificar la estrella. Respuesta Server: ' +
                  respuesta.status +
                  ' ' +
                  respuesta.message
              )
          )
        )
      );
  }
}
