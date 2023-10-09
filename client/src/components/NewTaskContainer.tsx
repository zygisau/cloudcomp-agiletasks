import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import NewTask from "./NewTask";
import { ITask, fetchTask, submitTask, updateTask } from "../api/tasks";
import { useNavigate, useParams } from "react-router-dom";

const NewTaskContainer = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const params = useParams();

  const id: string | undefined = params.id as string;
  const { data, isLoading, isError } = useQuery({
    queryKey: ["task", id],
    queryFn: () => fetchTask(id),
  });

  const { mutate } = useMutation({
    mutationFn: (values: ITask) => {
      if (id) {
        return updateTask({
          ...values,
          id,
          status: Number(values.status),
          priority: Number(values.priority),
        });
      }
      return submitTask({
        ...values,
        status: Number(values.status),
        priority: Number(values.priority),
      });
    },
    onSuccess: () => {
      navigate("/");
      queryClient.invalidateQueries(["tasks"]);
    },
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Something went wrong</div>;

  return <NewTask onSubmit={mutate} data={data} close={() => navigate("/")} />;
};

export default NewTaskContainer;
