// src/app/components/category-manager/category-manager.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { v4 as uuidv4 } from 'uuid';
import { Observable } from 'rxjs';

import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';
import { FeatureFlagService } from '../../services/feature-flag.service';

@Component({
  selector: 'app-category-manager',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  templateUrl: './category-manager.component.html',
  styleUrls: ['./category-manager.component.scss']
})
export class CategoryManagerComponent implements OnInit {
  categories$: Observable<Category[]> = this.categoryService.getCategories();
  newCategoryName = '';
  showUI = false;

  constructor(
    private categoryService: CategoryService,
    private flags: FeatureFlagService
  ) {}

  async ngOnInit(): Promise<void> {
    // Carga el flag remoto y lo asigna
    try {
      this.showUI = await this.flags.loadShowNewUIFlag();
    } catch {
      this.showUI = false;
    }
  }

  addCategory(): void {
    const name = this.newCategoryName.trim();
    if (!name) return;

    const category: Category = {
      id: uuidv4(),
      name
    };

    this.categoryService.addCategory(category)
      .then(() => this.newCategoryName = '');
  }

  deleteCategory(id: string): void {
    this.categoryService.deleteCategory(id);
  }
}
