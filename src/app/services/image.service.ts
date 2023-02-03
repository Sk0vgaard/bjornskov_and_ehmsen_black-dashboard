// eslint-disable-next-line max-classes-per-file
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { from, mergeMap, Observable } from 'rxjs';

import { ImageModel } from '../models/image.model';

export class FirestoreDbModel {
  static IMAGES_COLLECTION = 'images';
  static IMAGE_OVERVIEW_COLLECTION = 'image-overview';
}

export class FireFireStorageModel {
  static OVERVIEW_IMAGES = 'image-overview';
  static FISH_IMAGES = 'images/fish/';
}

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient, private firestore: AngularFirestore, private afStorage: AngularFireStorage) {}

  public getOverviewImages(): Observable<ImageModel[]> {
    return this.http.get<ImageModel[]>('assets/images.json');
  }

  public getOverviewPictures(): Observable<ImageModel[]> {
    return this.firestore.collection<ImageModel>(FirestoreDbModel.IMAGE_OVERVIEW_COLLECTION).valueChanges();
  }

  public addCategory(imageModel: ImageModel): any {
    return this.firestore
      .collection<ImageModel>(FirestoreDbModel.IMAGE_OVERVIEW_COLLECTION)
      .doc(imageModel.category)
      .set(imageModel);
  }

  public getImagesByFolder(folderPath: string): Observable<string[]> {
    const storageRef = this.afStorage.storage.ref();
    const listRef = storageRef.child(folderPath);

    return from(listRef.listAll()).pipe(
      mergeMap((res) => {
        return from(Promise.all(res.items.map((itemRef) => itemRef.getDownloadURL())));
      })
    );
  }
}
