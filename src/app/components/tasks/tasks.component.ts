import { Component, OnInit} from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Task} from '../../Task'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe((tasks)=>{
      this.tasks = tasks
    });
  }

  deleteTask(task: Task){
    this.taskService.deleteTask(task).subscribe(()=>{
      this.tasks = this.tasks.filter( task => task.id !==task.id )
    });
    }

  toggleReminder(task:Task){
    task.reminder = !task.reminder
    this.taskService.updtaeTaskReminder(task).subscribe();
    }

  addTask(task: Task){
    this.taskService.addTask(task).subscribe((task) =>(
    this.tasks.push(task))
    )
    }
}

