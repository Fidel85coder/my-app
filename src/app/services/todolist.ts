import { Injectable } from '@angular/core';

export interface Todo {
  id: number,
  title: string,
  completed: boolean,
};

@Injectable({
  providedIn: 'root',
})
export class Todolist {
  private todos: Todo[] = [
    { id: 1, title: 'Aprender Angular', completed: false },
    { id: 2, title: 'Hacer ejercicio', completed: true }
  ];
  getAll(): Todo[] {
    return this.todos;
  }
  add(title: string): void {
    const newTodo: Todo = {
      id: this.todos.length + 1,
      title: title,
      completed: false,
    };
    this.todos.push(newTodo);
  }
  toggle(id: number): void {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }
  delete(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
