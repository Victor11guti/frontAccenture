// src/app/services/firebase-task.service.ts
import { Injectable, EnvironmentInjector, runInInjectionContext } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class FirebaseTaskService {
  private collection = 'tasks';

  constructor(
    private afs: AngularFirestore,
    private injector: EnvironmentInjector
  ) {}

  getTasks(): Observable<Task[]> {
    return runInInjectionContext(this.injector, () =>
      this.afs.collection<Task>(this.collection).valueChanges({ idField: 'id' })
    );
  }

  addTask(task: Task): Promise<any> {
    return runInInjectionContext(this.injector, () =>
      this.afs.collection<Task>(this.collection).add(task)
    );
  }

  updateTask(taskOrId: string | Task, updates?: Partial<Task>): Promise<void> {
    return runInInjectionContext(this.injector, () => {
      if (typeof taskOrId === 'string') {
        return this.afs.collection(this.collection).doc(taskOrId).update(updates || {});
      } else {
        const { id, ...data } = taskOrId;
        return this.afs.collection(this.collection).doc(id).update(data);
      }
    });
  }

  deleteTask(id: string): Promise<void> {
    return runInInjectionContext(this.injector, () =>
      this.afs.collection(this.collection).doc(id).delete()
    );
  }
}
