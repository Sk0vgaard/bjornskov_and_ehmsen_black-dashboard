// eslint-disable-next-line max-classes-per-file
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

import { ImageModel } from '../models/image.model';

export class FirestoreDbModel {
  static IMAGES_COLLECTION = 'images';
}

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient, private db: AngularFirestore) {}

  public getOverviewImages(): Observable<ImageModel[]> {
    return this.http.get<ImageModel[]>('assets/images.json');
  }

  public getOverviewPictures(): Observable<ImageModel[]> {
    return this.db.collection<ImageModel>(FirestoreDbModel.IMAGES_COLLECTION).valueChanges();
  }
}
