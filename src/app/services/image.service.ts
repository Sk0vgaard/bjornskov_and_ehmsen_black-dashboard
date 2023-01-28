import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ImageModel } from '../models/image.model';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient) {}

  public getOverviewImages(): Observable<ImageModel[]> {
    return this.http.get<ImageModel[]>('assets/images.json');
  }
}
