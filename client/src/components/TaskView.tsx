import { Button, Table } from "@radix-ui/themes";
import { ITask } from "../api/tasks";
import { TrashIcon } from "@radix-ui/react-icons";
export interface ITaskView {
  data: ITask[];
  handleClick: (id: string) => void;
  handleDelete: (id: string) => void;
}

const statusMap: string[] = [
  "New",
  "Pending",
  "In Progress",
  "Completed",
  "In Review",
  "Ready for QA",
  "Done",
  "Rejected",
];

const priorityMap: string[] = ["Low", "Medium", "High", "Urgent"];

const TaskView: React.FC<ITaskView> = ({ data, handleClick, handleDelete }) => {
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Id</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Priority</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell align="center">
            Actions
          </Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data.map((task) => (
          <Table.Row key={task.id} className="hover:bg-slate-200">
            <Table.RowHeaderCell className="p-0" style={{ padding: 0 }}>
              <a
                href=""
                className="p-3 block"
                onClick={() => handleClick(task.id)}
              >
                {task.id}
              </a>
            </Table.RowHeaderCell>
            <Table.Cell className="p-0" style={{ padding: 0 }}>
              <a
                href=""
                className="p-3 block"
                onClick={() => handleClick(task.id)}
              >
                {task.title}
              </a>
            </Table.Cell>
            <Table.Cell className="p-0" style={{ padding: 0 }}>
              <a
                href=""
                className="p-3 block"
                onClick={() => handleClick(task.id)}
              >
                {statusMap[task.status]}
              </a>
            </Table.Cell>
            <Table.Cell className="p-0" style={{ padding: 0 }}>
              <a
                href=""
                className="p-3 block"
                onClick={() => handleClick(task.id)}
              >
                {priorityMap[task.priority]}
              </a>
            </Table.Cell>
            <Table.Cell style={{ padding: 0 }} align="center">
              <div
                className="p-0 w-fit flex align-middle justify-center items-center"
                style={{ height: "inherit" }}
              >
                <Button
                  className="p-3 rounded-full hover:bg-slate-400 w-fit"
                  onClick={() => handleDelete(task.id)}
                >
                  <TrashIcon />
                </Button>
              </div>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default TaskView;
