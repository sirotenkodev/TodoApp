import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoDataService } from './tododata.service';
import { Todo } from './todo';
 
@Component({
    templateUrl: './todo-detail.component.html',
    providers: [TodoDataService]
})
export class TodoDetailComponent implements OnInit {
 
    id: number;
    product: Todo;
    loaded: boolean = false;
 
    constructor(private dataService: TodoDataService, activeRoute: ActivatedRoute) {
        this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
    }
 
    ngOnInit() {
        if (this.id)
            this.dataService.getProduct(this.id)
                .subscribe((data: Todo) => { this.product = data; this.loaded = true; });
    }
}