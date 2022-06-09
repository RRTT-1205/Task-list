import { Injectable } from '@angular/core';
import {Task} from '../../app/Task';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TASKS} from '../../app/mock-tasks';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

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
  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apUrl}/${task.id}`
    return this.http.delete<Task>(url)
  }
  updtaeTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apUrl}/${task.id}`
    return this.http.put<Task>(url, task, httpOptions)
  }

  addTask(task: Task): Observable<Task> {
     return this.http.post<Task>(this.apUrl, task, httpOptions)
  }

}
