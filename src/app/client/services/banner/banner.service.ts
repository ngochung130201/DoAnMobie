import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TySlider } from 'src/app/admin/types/ISlider';

@Injectable({
  providedIn: 'root'
})
export class BannerService {


  constructor(private http: HttpClient) { }
  private readonly baseUrl = 'https://localhost:7164/api/Sliders';

  public getAllBanner(): Observable<TySlider[]> {
    return this.http.get<TySlider[]>(`${this.baseUrl}`);
  }

}
