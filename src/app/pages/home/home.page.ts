import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TaskListComponent } from '../../components/task-list/task-list.component';
import { CategoryManagerComponent } from '../../components/category-manager/category-manager.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    TaskListComponent,
    CategoryManagerComponent
  ]
})
export class HomePage {
  constructor() {}
}