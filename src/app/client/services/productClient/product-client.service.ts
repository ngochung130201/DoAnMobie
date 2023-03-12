import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeProducts } from 'src/app/admin/types/TypeProducts';

@Injectable({
  providedIn: 'root'
})
export class ProductClientService {

  constructor(private http: HttpClient) { }
  private readonly baseUrl = 'https://localhost:7164/api/Products';

  public getAllProduct(): Observable<any> {
    return this.http.get<TypeProducts[]>(`${this.baseUrl}`);
  }
  public getProductBySlug(slug: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${slug}`);
  }
}
