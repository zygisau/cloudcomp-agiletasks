import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Task, Priority, Status } from "../entity/Task";
import z from "zod";

const taskNoIdSchema = z.object({
  title: z.string(),
  status: z.nativeEnum(Status),
  priority: z.nativeEnum(Priority),
  description: z.string().optional(),
});

export const getTasks = async (res: Response) => {
  try {
    const tasks = await AppDataSource.manager.find(Task);
    return res.send(tasks);
  } catch (error) {
    res.status(500).send(error);
    console.error(error);
  }
};

export const getTask = async (req: Request, res: Response) => {
  try {
    const id = z.coerce.number().safeParse(req.params.taskId);
    if (!id.success) return res.status(400).send(id.error);

    const task = await AppDataSource.manager.findOneOrFail(Task, {
      where: { id: id.data },
    });
    return res.send(task);
  } catch (error) {
    res.status(500).send(error);
    console.error(error);
  }
};

export const createTask = async (req: Request, res: Response) => {
  try {
    const result = taskNoIdSchema.safeParse(req.body);
    if (!result.success) return res.status(400).send(result.error.issues);

    const task = AppDataSource.manager.create(Task, result.data);
    const results = await AppDataSource.manager.save(task);
    return res.send(results);
  } catch (error) {
    res.status(500).send(error);
    console.error(error);
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    // parse the task
    const result = taskNoIdSchema.safeParse(req.body);
    const id = z.coerce.number().safeParse(req.params.taskId);
    if (!result.success) return res.status(400).send(result.error.issues);
    if (!id.success) return res.status(400).send(id.error.issues);

    // update the task
    const updated = await AppDataSource.manager.update(
      Task,
      { id: id.data },
      result.data
    );
    return res.send(updated.raw);
  } catch (error) {
    res.status(500).send(error);
    console.error(error);
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    // parse id
    const id = z.number().safeParse(req.params.id);
    if (!id.success) return res.status(400).send(id.error);

    // check if the task exists
    const deleteResult = await AppDataSource.manager.delete(Task, {
      where: { id: id.data },
    });
    if (!deleteResult.affected) return res.status(404).send("Task not found");

    return res.sendStatus(200);
  } catch (error) {
    res.status(500).send(error);
    console.error(error);
  }
};
