import { useQuery } from "@tanstack/react-query";
import { fetchTasks } from "../api/tasks";
import NewTaskContainer from "./NewTaskContainer";
import TaskView from "./TaskView";

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

  return (
    <>
      <NewTaskContainer />
      <TaskView data={data} handleClick={handleClick} />
    </>
  );
};

export default TaskContainer;
