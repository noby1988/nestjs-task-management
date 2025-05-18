import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';
import { TasksDataService } from './tasks-data.service';
import { TaskStatus } from './task-status.enum.';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
  constructor(private readonly tasksDataService: TasksDataService) {}

  getTasks(filterDto: GetTasksFilterDto): Promise<Task[]> {
    return this.tasksDataService.getTasks(filterDto);
  }

  getTaskById(id: string): Promise<Task> {
    return this.tasksDataService.getTaskById(id);
  }

  createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksDataService.createTask(createTaskDto);
  }

  deleteTask(id: string): Promise<void> {
    return this.tasksDataService.deleteTask(id);
  }

  updateTaskStatus(id: string, status: TaskStatus): Promise<Task> {
    return this.tasksDataService.updateTaskStatus(id, status);
  }
}
