import { Button } from "@radix-ui/themes";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, Outlet } from "react-router-dom";
import { deleteTask, fetchTasks } from "../api/tasks";
import TaskView from "./TaskView";

const TaskContainer = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data, isError, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });

  const { mutate: deleteRow } = useMutation({
    mutationFn: (id: string) => {
      return deleteTask(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });

  const handleNewTask = () => {
    navigate("/new");
  };

  const handleItemClick = (id: string) => {
    navigate(`/${id}`);
  };

  const handleDelete = (id: string) => {
    deleteRow(id);
  };

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Something went wrong</div>;

  return (
    <>
      <Button className="w-fit" onClick={handleNewTask}>
        New Task
      </Button>
      <TaskView
        data={data}
        handleClick={handleItemClick}
        handleDelete={handleDelete}
      />
      <Outlet />
    </>
  );
};

export default TaskContainer;
