import { Component, OnInit, inject } from '@angular/core';
import { Todo, Todolist } from '../../services/todolist'

@Component({
  selector: 'app-lista',
  imports: [],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista implements OnInit {
  todos: Todo[] = [];
  newTodo = '';
  todoService = inject(Todolist);

  ngOnInit(): void {
    this.todos = this.todoService.getAll();
  }

  addTodo() {
    if (this.newTodo.trim()) {
      this.todoService.add(this.newTodo);
      this.newTodo = '';
    }
  }
  toggleTodo(id: number) {
    this.todoService.toggle(id);
  }

  deleteTodo(id: number) {
    this.todoService.delete(id);
  }

}
