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

export const fetchTasks = async (): Promise<ITask[]> => {
  const response = await fetch(`${window.location.href}api/tasks`);
  const tasks = await response.json();
  return tasks;
};

export const fetchTask = async (taskId: string): Promise<ITask> => {
  const response = await fetch(`${window.location.href}api/tasks/${taskId}`);
  const tasks = await response.json();
  return tasks;
};

export const submitTask = async (task: ITask): Promise<ITask> => {
  const response = await fetch(`${window.location.href}api/tasks/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const newTask = await response.json();
  return newTask;
};
