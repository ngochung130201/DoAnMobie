import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TyProductCategory } from '../../types/TyProductCategory';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  constructor(private http: HttpClient) { }
  private readonly baseUrl = 'https://localhost:7164/api/ProductCategorys';

  public getAllProductCategory(): Observable<TyProductCategory[]> {
    return this.http.get<TyProductCategory[]>(`${this.baseUrl}`);
  }

  public deleteProductCategory(id: string): Observable<TyProductCategory[]> {
    return this.http.delete<TyProductCategory[]>(`${this.baseUrl}/${id}`);
  }

  public createProductCategory(data: TyProductCategory): Observable<number> {
    return this.http.post<number>(`${this.baseUrl}`, data);
  }

  public getProductCategory(slug: string): Observable<TyProductCategory> {
    return this.http.get<TyProductCategory>(`${this.baseUrl}/${slug}`);
  }

  public updateProductCategory(slug: string, data: TyProductCategory) {
    return this.http.put(`${this.baseUrl}/${slug}`, data);
  }

  public deleteProductCategoryAll(data: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}`, data);
  }
}
