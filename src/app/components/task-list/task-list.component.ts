import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { Category } from '../../models/category.model';
import { FirebaseTaskService } from '../../services/firebase-task.service';
import { CategoryService } from '../../services/category.service';
import { v4 as uuidv4 } from 'uuid';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  categories: Category[] = [];
  newTaskTitle = '';
  selectedCategoryId: string = '';
  activeCategoryFilter = 'all';

  constructor(
    private taskService: FirebaseTaskService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
    this.categoryService.getCategories().subscribe(cats => this.categories = cats);
  }

  addTask() {
    if (!this.newTaskTitle.trim()) return;
    const newTask: Task = {
      id: uuidv4(),
      title: this.newTaskTitle.trim(),
      completed: false,
      createdAt: Date.now(),
      categoryId: this.selectedCategoryId || undefined
    };
    this.taskService.addTask(newTask).then(() => {
      this.newTaskTitle = '';
      this.selectedCategoryId = '';
    });
  }

  toggleTask(task: Task) {
    task.completed = !task.completed;
    // Fix: Pass both id and a partial task object
    this.taskService.updateTask(task.id, { completed: task.completed });
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task.id);
  }

  getFilteredTasks(): Task[] {
    if (this.activeCategoryFilter === 'all') return this.tasks;
    return this.tasks.filter(t => t.categoryId === this.activeCategoryFilter);
  }

  getCategoryName(id?: string): string {
    return this.categories.find(c => c.id === id)?.name || '';
  }
}