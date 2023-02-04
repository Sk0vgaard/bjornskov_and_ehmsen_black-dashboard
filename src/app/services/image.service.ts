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
    // Create a reference to the Firebase storage
    const storageRef = this.afStorage.storage.ref();
    // Get a reference to the folder containing the images
    const listRef = storageRef.child(folderPath);

    // Return an observable that retrieves the list of all items in the folder
    return from(listRef.listAll()).pipe(
      // Use mergeMap to transform the list of items into an array of URLs
      mergeMap((res) => {
        // Use Promise.all to retrieve all the URLs of the items at once
        return from(Promise.all(res.items.map((itemRef) => itemRef.getDownloadURL())));
      })
    );
  }
}
