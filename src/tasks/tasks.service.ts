// tasks.service.ts
import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';
import { TasksDataService } from './tasks-data.service';

@Injectable()
export class TasksService {
  constructor(private readonly tasksDataService: TasksDataService) {}

  getTaskById(id: string): Promise<Task> {
    return this.tasksDataService.getTaskById(id);
  }

  createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksDataService.createTask(createTaskDto);
  }
}
