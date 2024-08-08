// eslint-disable-next-line max-classes-per-file
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { forkJoin, from, map, mergeMap, Observable, switchMap } from 'rxjs';

import { FireStorageImageModel } from '../_models/fire-storage-image.model';
import { FirestoreDbEnum } from '../pages/images/firestore-db.enum';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(
    private db: AngularFirestore,
    private afStorage: AngularFireStorage
  ) {}

  public getOverviewImagesWithUrls(): Observable<FireStorageImageModel[]> {
    return this.getOverviewImages().pipe(
      switchMap((imageModels: FireStorageImageModel[]) =>
        forkJoin(
          imageModels.map((imageModel) =>
            this.getFileUrl(`${FirestoreDbEnum.IMAGE_OVERVIEW}/${imageModel.fileName}`).pipe(
              map((url) => ({
                ...imageModel,
                url,
              }))
            )
          )
        )
      )
    );
  }

  private getFileUrl(folderPath: string): Observable<string> {
    const ref = this.afStorage.ref(folderPath);
    return ref.getDownloadURL();
  }

  public getOverviewImages(): Observable<FireStorageImageModel[]> {
    return this.db.collection<FireStorageImageModel>(FirestoreDbEnum.IMAGE_OVERVIEW).valueChanges();
  }

  public getImagesByCategory(folderPath: string): Observable<string[]> {
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
