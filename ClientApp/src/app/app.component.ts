import { Component, OnInit } from '@angular/core';
import { TodoDataService } from './tododata.service';
import { Todo } from './todo';
 
@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    providers: [TodoDataService]
})
export class AppComponent implements OnInit {
 
    todo: Todo = new Todo();   // изменяемый товар
    todos: Todo[];                // массив товаров
    tableMode: boolean = true;          // табличный режим
 
    constructor(private dataService: TodoDataService) { }
 
    ngOnInit() {
        this.loadProducts();    // загрузка данных при старте компонента  
    }
    // получаем данные через сервис
    loadProducts() {
        this.dataService.getProducts()
            .subscribe((data: Todo[]) => this.todos = data);
    }
    // сохранение данных
    save() {
        if (this.todo.id == null) {
            this.dataService.createProduct(this.todo)
                .subscribe((data: Todo) => this.todos.push(data));
        } else {
            this.dataService.updateProduct(this.todo)
                .subscribe(data => this.loadProducts());
        }
        this.cancel();
    }
    editTodo(t: Todo) {
        this.todo = t;
    }
    cancel() {
        this.todo = new Todo();
        this.tableMode = true;
    }
    delete(t: Todo) {
        this.dataService.deleteProduct(t.id)
            .subscribe(data => this.loadProducts());
    }
}