import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TaskDto } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('/tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}
  @Get('/')
  getTasks() {
    return this.taskService.getTasks();
  }
  @Get('/:id')
  getTask(@Param('id') id: string) {
    return this.taskService.getTaskById(+id);
  }

  @Post('/')
  createTask(@Body() dados: TaskDto) {
    return this.taskService.createTask(dados);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.deleteTask(+id);
  }
}
