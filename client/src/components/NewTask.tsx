import * as Dialog from "@radix-ui/react-dialog";
import * as Form from "@radix-ui/react-form";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { ITask } from "../api/tasks";

export interface INewTask {
  onSubmit: (data: ITask) => void;
  data: ITask | undefined;
  close: () => void;
}

const NewTask: React.FC<INewTask> = ({ onSubmit, data, close }) => {
  const { register, handleSubmit } = useForm({ defaultValues: data });

  return (
    <div>
      <Dialog.Root open defaultOpen>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
              New task
            </Dialog.Title>
            <Form.Root className="" onSubmit={handleSubmit(onSubmit)}>
              <Form.Field className="grid mb-[10px]" name="title">
                <div className="flex items-baseline justify-between">
                  <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
                    Title
                  </Form.Label>
                </div>
                <Form.Control asChild>
                  <input
                    {...register("title")}
                    className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                    type="text"
                    placeholder="As a user, I want to..."
                    required
                  />
                </Form.Control>
              </Form.Field>

              <Form.Field className="grid mb-[10px]" name="description">
                <div className="flex items-baseline justify-between">
                  <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
                    Description
                  </Form.Label>
                </div>
                <Form.Control asChild>
                  <textarea
                    {...register("description")}
                    className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6 resize-none"
                    placeholder="Details..."
                  />
                </Form.Control>
              </Form.Field>

              <Form.Field className="grid mb-[10px]" name="status">
                <div className="flex items-baseline justify-between">
                  <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
                    Status
                  </Form.Label>
                </div>
                <Form.Control asChild>
                  <select
                    className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                    defaultValue={0}
                    {...register("status")}
                  >
                    <option value="0">New</option>
                    <option value="1">Pending</option>
                    <option value="2">In Progress</option>
                    <option value="3">Completed</option>
                    <option value="4">In Review</option>
                    <option value="5">Ready for QA</option>
                    <option value="6">Done</option>
                    <option value="7">Rejected</option>
                  </select>
                </Form.Control>
              </Form.Field>

              <Form.Field className="grid mb-[30px]" name="priority">
                <div className="flex items-baseline justify-between">
                  <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
                    Priority
                  </Form.Label>
                </div>
                <Form.Control asChild>
                  <select
                    className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                    defaultValue={0}
                    {...register("priority")}
                  >
                    <option value="0">Low</option>
                    <option value="1">Medium</option>
                    <option value="2">High</option>
                    <option value="3">Urgent</option>
                  </select>
                </Form.Control>
              </Form.Field>

              <Form.Submit asChild className="grid mt-3">
                <Button size="3" variant="outline" className="w-full">
                  Submit
                </Button>
              </Form.Submit>
            </Form.Root>
            <Dialog.Close asChild>
              <Button
                className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                aria-label="Close"
                onClick={() => close()}
              >
                <Cross2Icon />
              </Button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default NewTask;
