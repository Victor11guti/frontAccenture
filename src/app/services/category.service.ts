// src/app/services/category.service.ts
import { Injectable, EnvironmentInjector, runInInjectionContext } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  private collectionName = 'categories';

  constructor(
    private afs: AngularFirestore,
    private injector: EnvironmentInjector
  ) {}

  /** Obtiene todas las categorías */
  getCategories(): Observable<Category[]> {
    return runInInjectionContext(this.injector, () =>
      this.afs
        .collection<Category>(this.collectionName)
        .valueChanges({ idField: 'id' })
    );
  }

  /** Añade una nueva categoría */
  addCategory(category: Category): Promise<void> {
    return runInInjectionContext(this.injector, () =>
      this.afs
        .doc<Category>(`${this.collectionName}/${category.id}`)
        .set(category)
    );
  }

  /** Elimina la categoría */
  deleteCategory(id: string): Promise<void> {
    return runInInjectionContext(this.injector, () =>
      this.afs.doc(`${this.collectionName}/${id}`).delete()
    );
  }
}
