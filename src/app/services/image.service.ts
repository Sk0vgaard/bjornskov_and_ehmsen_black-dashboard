// eslint-disable-next-line max-classes-per-file
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';

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
  constructor(
    private http: HttpClient,
    private angularFirestore: AngularFirestore,
    private afStorage: AngularFireStorage
  ) {}

  public getOverviewImages(): Observable<ImageModel[]> {
    return this.http.get<ImageModel[]>('assets/images.json');
  }

  public getOverviewPictures(): Observable<ImageModel[]> {
    return this.angularFirestore.collection<ImageModel>(FirestoreDbModel.IMAGE_OVERVIEW_COLLECTION).valueChanges();
  }

  public addCategory(imageModel: ImageModel): any {
    return this.angularFirestore
      .collection<ImageModel>(FirestoreDbModel.IMAGE_OVERVIEW_COLLECTION)
      .doc(imageModel.category)
      .set(imageModel);
  }

  // public getImagesByFolder(folderPath: string): void {
  //   const storageRef = this.afStorage.storage.ref();
  //   // Create a reference under which you want to list
  //   const listRef = storageRef.child(folderPath);
  //
  //   // Find all the prefixes and items.
  //   listRef
  //     .listAll()
  //     .then((res) => {
  //       res.prefixes.forEach((folderRef) => {
  //         // All the prefixes under listRef.
  //         // You may call listAll() recursively on them.
  //         console.log(folderRef);
  //       });
  //       res.items.forEach((itemRef) => {
  //         // All the items under listRef.
  //         console.log(itemRef);
  //         itemRef.getDownloadURL().then((url) => {
  //           console.log(url);
  //         });
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       // Uh-oh, an error occurred!
  //     });
  // }

  public getImagesByFolder(folderPath: string): Observable<string[]> {
    const storageRef = this.afStorage.storage.ref();
    const listRef = storageRef.child(folderPath);

    return new Observable<string[]>((observer) => {
      listRef
        .listAll()
        .then((res) => {
          const urls = [];
          res.items.forEach((itemRef) => {
            itemRef.getDownloadURL().then((url) => {
              urls.push(url);
            });
          });
          observer.next(urls);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }
}
