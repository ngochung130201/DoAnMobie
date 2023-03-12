import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TySlider } from '../../types/ISlider';
import { TyBrand } from '../../types/TyBrand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http: HttpClient) { }
  private readonly baseUrl = 'https://localhost:7164/api/Brands';

  public getAllBrand(): Observable<TyBrand[]> {
    return this.http.get<TyBrand[]>(`${this.baseUrl}`);
  }

  public deleteBrand(id: string): Observable<TyBrand[]> {
    return this.http.delete<TyBrand[]>(`${this.baseUrl}/${id}`);
  }

  public createBrand(data: TyBrand): Observable<number> {
    return this.http.post<number>(`${this.baseUrl}`, data);
  }

  public getBrand(id: string): Observable<TyBrand> {
    return this.http.get<TyBrand>(`${this.baseUrl}/${id}`);
  }

  public updateBrand(id: string, data: TyBrand) {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  public deleteBrandAll(data: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}`, data);
  }

}
