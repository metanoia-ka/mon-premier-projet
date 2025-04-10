import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

    private tasks: Task[] = [];

    findAll(): Task[] {
        return this.tasks;
    }

    create(title: string, description: string): Task {

        const nextTask = { id: Date.now(), title, description };
        this.tasks.push(nextTask);

        return nextTask;
    }
k
    delete(id: number): boolean {

        const initialLength = this.tasks.length;
        this.tasks = this.tasks.filter(
            task => task.id !== id
        );

        return this.tasks.length < initialLength
    }

}
