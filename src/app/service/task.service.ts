import { Injectable } from '@angular/core';
import {Task} from '../../app/Task';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {TASKS} from '../../app/mock-tasks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apUrl = 'http://localhost:3001/tasks'

  constructor(
    private http: HttpClient
  ) { }

  getTasks(): Observable <Task[]>{
    return this.http.get<Task[]>(this.apUrl)
  }
}
