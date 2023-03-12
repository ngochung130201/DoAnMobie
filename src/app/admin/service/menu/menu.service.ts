import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypeMenus } from '../../types/IMenu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }
  private readonly baseUrl = 'https://localhost:7164/api/Menus';

  public getAllMenu(): Observable<TypeMenus[]> {
    return this.http.get<TypeMenus[]>(`${this.baseUrl}`);
  }

  public deleteMenu(id: string): Observable<TypeMenus[]> {
    return this.http.delete<TypeMenus[]>(`${this.baseUrl}/${id}`);
  }

  public createMenu(data: TypeMenus): Observable<number> {
    return this.http.post<number>(`${this.baseUrl}`, data);
  }

  public getMenu(id: string): Observable<TypeMenus> {
    return this.http.get<TypeMenus>(`${this.baseUrl}/${id}`);
  }

  public updateMenu(id: string, data: TypeMenus) {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  public deleteMenuAll(data: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}`, data);
  }

}
