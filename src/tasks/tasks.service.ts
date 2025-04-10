import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update.dto';

@Injectable()
export class TasksService {

    private tasks: Task[] = [];

    // Find all tasks
    // @returns An array of tasks
    findAll(): Task[] {
        return this.tasks;
    }

    // Find a task by ID
    // @param id - The ID of the task to find
    findOne(id: number): Task {
        const foundTask = this.tasks.find(task => task.id === id);
        if (!foundTask) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }
        return foundTask;
    }

    // Update task details
    // @param id - The ID of the task to update
    update(id: number, updateTaskDto: UpdateTaskDto): Task {
        const task = this.findOne(id);
        const updatedTask = { ...task, ...updateTaskDto };
        this.tasks = this.tasks.map(t => (t.id === id ? updatedTask : t));
        return updatedTask;
    }

    // Update task status
    // @param id - The ID of the task to update
    updateStatus(id: number, status: TaskStatus): Task {
        const task = this.findOne(id);
        task.status = status;
        return task;
    }

    // Create a new task
    // @param createTaskDto - The data transfer object containing task details
    create(createTaskDto: CreateTaskDto): Task {
        const task: Task = {
            id: Date.now(),
            title: createTaskDto.title,
            description: createTaskDto.description,
            status: 'PENDING',
        };
        this.tasks.push(task);
        return task;
    }

    // Delete a task by ID
    // @param id - The ID of the task to delete
    delete(id: number): void {

        const index = this.tasks.findIndex(task => task.id === id);
        if (index === -1) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }
        this.tasks.splice(index, 1);
    }

}
