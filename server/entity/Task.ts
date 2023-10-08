import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum Priority {
  Low = 0,
  Medium = 1,
  High = 2,
  Urgent = 3,
}

export enum Status {
  New = 0,
  Pending = 1,
  InProgress = 2,
  Completed = 3,
  InReview = 4,
  ReadyForQA = 5,
  Done = 6,
  Rejected = 7,
}

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    length: 255,
  })
  title: string;

  @Column({
    type: "enum",
    enum: Status,
    default: Status.New,
  })
  status: Status;

  @Column({
    type: "enum",
    enum: Priority,
    default: Priority.Low,
  })
  priority: Priority;

  @Column({
    type: "text",
    nullable: true,
  })
  description: string;
}
