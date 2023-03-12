import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TySlider } from '../../types/ISlider';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private http: HttpClient) { }
  private readonly baseUrl = 'https://localhost:7164/api/Sliders';

  public getAllBanner(): Observable<TySlider[]> {
    return this.http.get<TySlider[]>(`${this.baseUrl}`);
  }

  public deleteBanner(id: string): Observable<TySlider[]> {
    return this.http.delete<TySlider[]>(`${this.baseUrl}/${id}`);
  }

  public createBanner(data: any): Observable<number> {
    return this.http.post<number>(`${this.baseUrl}`, data);
  }

  public getBanner(id: string): Observable<TySlider> {
    return this.http.get<TySlider>(`${this.baseUrl}/${id}`);
  }

  public updateBanner(id: string, data: TySlider) {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  public deleteBannerAll(data: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}`, data);
  }

}
