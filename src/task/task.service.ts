import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskDto } from './dto/task.dto';
import { TaskEntity } from './entities/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private taskRepository: Repository<TaskEntity>,
  ) {}

  async getTasks() {
    return this.taskRepository.find();
  }

  async getTaskById(id: number) {
    const task = await this.taskRepository.findOne({ id });
    if (!task) throw new NotFoundException('Task nao encontrada');
    return task;
  }

  async createTask(dados: TaskDto) {
    const task = await this.taskRepository.save(dados);
    return task;
  }

  async deleteTask(id: number) {
    const task = await this.taskRepository.findOne({ id });

    if (!task) throw new NotFoundException('Task nao foi encontrada');

    await this.taskRepository.delete({ id });
    return task;
  }
}
