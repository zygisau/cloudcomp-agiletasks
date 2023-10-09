import NewTaskContainer from "./components/NewTaskContainer";
import TasksContainer from "./components/TasksContainer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routeConfig = createBrowserRouter([
  {
    path: "/",
    Component: TasksContainer,
    children: [
      {
        path: "/new",
        Component: NewTaskContainer,
      },
      {
        path: "/:id",
        Component: NewTaskContainer,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
        </div>
        <RouterProvider router={routeConfig} />
      </div>
    </>
  );
}

export default App;
