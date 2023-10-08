import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import NewTask from "./NewTask";
import { ITask, fetchTask, submitTask } from "../api/tasks";
import { useState } from "react";

const NewTaskContainer = () => {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const id = "";
  const { data } = useQuery({
    queryKey: ["task", id],
    queryFn: () => fetchTask(id),
  });

  const { mutate } = useMutation({
    mutationFn: (values: ITask) =>
      submitTask({
        ...values,
        status: Number(values.status),
        priority: Number(values.priority),
      }),
    onSuccess: () => {
      setOpen(false);
      queryClient.invalidateQueries(["tasks"]);
    },
  });

  return (
    <NewTask
      onSubmit={mutate}
      data={data}
      open={open}
      setOpen={() => setOpen(true)}
    />
  );
};

export default NewTaskContainer;
