import { useQuery } from "@tanstack/react-query";
import TaskView from "./TaskView";
import { fetchTasks } from "./api/tasks";

const TaskContainer = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });

  const handleClick = () => {
    console.log("clicked");
  };

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Something went wrong</div>;

  return <TaskView data={data} handleClick={handleClick} />;
};

export default TaskContainer;
