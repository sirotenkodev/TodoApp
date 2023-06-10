import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoDetailComponent } from './todo-detail.component';
import { TodoDataService } from './tododata.service';

const appRoutes: Routes = [
    { path: 'todo/:id', component: TodoDetailComponent },
    { path: '**', redirectTo: '/' }
];
 
@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, TodoDetailComponent],
    providers: [TodoDataService],
    bootstrap: [AppComponent]
})
export class AppModule { }