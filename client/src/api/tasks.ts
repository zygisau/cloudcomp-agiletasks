import { faker } from "@faker-js/faker";
import z from "zod";

export enum PriorityRaw {
  Low = 0,
  Medium = 1,
  High = 2,
  Urgent = 3,
}
export const Priority = z.nativeEnum(PriorityRaw);

export enum StatusRaw {
  New = 0,
  Pending = 1,
  InProgress = 2,
  Completed = 3,
  InReview = 4,
  ReadyForQA = 5,
  Done = 6,
  Rejected = 7,
}
export const Status = z.nativeEnum(StatusRaw);

const singleTaskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.number(),
  priority: z.number(),
  description: z.string(),
});

export type ITask = z.infer<typeof singleTaskSchema>;

const tasksSchema = z.array(singleTaskSchema);

// generate with faker
export const fetchTasks = async (): Promise<ITask[]> => {
  const taskCount = 10;
  const tasks: ITask[] = [];
  for (let i = 0; i < taskCount; i++) {
    tasks.push({
      id: `TASK-${i}`,
      title: `${faker.hacker.verb()} ${faker.hacker.adjective()} ${faker.hacker.noun()}.`,
      status: faker.number.int({ min: 0, max: 7 }) as StatusRaw,
      priority: faker.number.int({ min: 0, max: 3 }) as PriorityRaw,
      description: faker.lorem.paragraph(),
    });
  }
  return tasks;
};
