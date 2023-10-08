import { Table } from "@radix-ui/themes";
import { ITask } from "./api/tasks";

export interface ITaskView {
  data: ITask[];
  handleClick: () => void;
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

const TaskView: React.FC<ITaskView> = ({ data, handleClick }) => {
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Id</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Priority</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data.map((task) => (
          <Table.Row key={task.id}>
            <Table.RowHeaderCell className="p-0" style={{ padding: 0 }}>
              <a href="#" className="p-3 block" onClick={handleClick}>
                {task.id}
              </a>
            </Table.RowHeaderCell>
            <Table.Cell className="p-0" style={{ padding: 0 }}>
              <a href="#" className="p-3 block" onClick={handleClick}>
                {task.title}
              </a>
            </Table.Cell>
            <Table.Cell className="p-0" style={{ padding: 0 }}>
              <a href="#" className="p-3 block" onClick={handleClick}>
                {statusMap[task.status]}
              </a>
            </Table.Cell>
            <Table.Cell className="p-0" style={{ padding: 0 }}>
              <a href="#" className="p-3 block" onClick={handleClick}>
                {priorityMap[task.priority]}
              </a>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default TaskView;
