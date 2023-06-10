import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Todo } from './todo';
 
@Injectable()
export class TodoDataService {
 
    private url = "/api/todos";
 
    constructor(private http: HttpClient) {
    }
 
    getProducts() {
        return this.http.get(this.url);
    }
     
    getProduct(id: number) {
        return this.http.get(this.url + '/' + id);
    }
     
    createProduct(todo: Todo) {
        return this.http.post(this.url, todo);
    }
    updateProduct(todo: Todo) {
  
        return this.http.put(this.url, todo);
    }
    deleteProduct(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}