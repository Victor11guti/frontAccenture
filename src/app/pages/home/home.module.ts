// src/app/pages/home/home.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';

// Importa tus componentes standalone para poder usarlos en HomePage
import { TaskListComponent } from '../../components/task-list/task-list.component';
import { CategoryManagerComponent } from '../../components/category-manager/category-manager.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskListComponent,
    CategoryManagerComponent,
    HomePageRoutingModule
  ]
})
export class HomePageModule {}
