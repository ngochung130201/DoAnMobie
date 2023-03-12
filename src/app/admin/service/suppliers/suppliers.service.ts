import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TySuppliers } from '../../types/TySuppliers';
@Injectable({
  providedIn: 'root'
})
export class SuppliersService {
  constructor(private http: HttpClient) { }
  private readonly baseUrl = 'https://localhost:7164/api/Suppliers';

  public getAllSuppliers(): Observable<TySuppliers[]> {
    return this.http.get<TySuppliers[]>(`${this.baseUrl}`);
  }

  public deleteSuppliers(id: string): Observable<TySuppliers[]> {
    return this.http.delete<TySuppliers[]>(`${this.baseUrl}/${id}`);
  }

  public createSuppliers(data: TySuppliers): Observable<number> {
    return this.http.post<number>(`${this.baseUrl}`, data);
  }

  public getSuppliers(id: string): Observable<TySuppliers> {
    return this.http.get<TySuppliers>(`${this.baseUrl}/${id}`);
  }

  public updateSuppliers(id: string, data: TySuppliers) {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  public deleteSuppliersAll(data: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}`, data);
  }
}
