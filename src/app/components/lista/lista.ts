import { Component, OnInit, inject } from '@angular/core';
import { Task, TaskService } from '../../services/todolist';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [FormsModule, RouterLink], 
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista implements OnInit {
  tasks: Task[] = [];
  newTaskTitle = '';

  taskService = inject(TaskService);

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getAll().subscribe(data => this.tasks = data);
  }

  addTask() {
    if (!this.newTaskTitle.trim()) return;
    const task: Task = { title: this.newTaskTitle, completed: false };
    this.taskService.add(task).subscribe(() => {
      this.newTaskTitle = '';
      this.loadTasks();
    });
  }

  toggleTask(task: Task) {
    task.completed = !task.completed;
    this.taskService.update(task).subscribe();
  }

  deleteTask(id: number | undefined) {
    if (id === undefined) return;
    this.taskService.delete(id).subscribe(() => this.loadTasks());
  }

  trackById(index: number, task: Task) {
  return task.id;
  }
}
