import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';


@Controller('tasks')
export class TasksController {
    constructor(private readonly taskService: TasksService){}

    @Get('')
    getAllTask(): Task[] {
        return this.taskService.findAll()
    }

    @Post()
    createTask(@Body() body: { title: string; description: string }): Task {
        return this.taskService.create(body.title, body.description)
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string): boolean | undefined {
        return this.taskService.delete(+id)
    }
}
