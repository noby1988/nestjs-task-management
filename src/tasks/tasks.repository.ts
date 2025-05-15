import { Repository } from 'typeorm';
import { Task } from './task.entity';

export class TaskRepository {
  constructor(private readonly repository: Repository<Task>) {}
}
