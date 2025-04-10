import { IsOptional, IsNotEmpty } from 'class-validator';

export class UpdateTaskDto {
    @IsOptional()
    @IsNotEmpty()
    title?: string;

    @IsOptional()
    @IsNotEmpty()
    description?: string;
}
// Compare this snippet from src/tasks/tasks.controller.ts: