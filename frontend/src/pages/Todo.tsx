import { useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import DeleteButton from "../components/button/DeleteButton";
import SubmitButton from "../components/button/SubmitButton";
import { getRequest, postRequest } from "../components/common/ApiUtils";
import SelectBox from "../components/field/SelectBox";
import TextInput from "../components/field/TextInput";
import { SelectOption } from "../interface/common";

type Inputs = {
  id?: number;
  priority: string;
  task: string;
};

interface TodoResponse {
  todoList: Inputs[];
  priorityOptions: SelectOption<string>[];
}

/**
 *
 * @returns TODO画面
 */
const Todo = () => {
  const hookForm = useForm<Inputs>();
  const { handleSubmit, reset } = hookForm;
  const [tasks, setTasks] = useState<Inputs[]>([]);
  const [priorityOptions, setPriorityOptions] = useState<SelectOption<string>[]>([]);

  const fetchTodoList = () => {
    getRequest("/api/todo", (res: TodoResponse) => {
      setPriorityOptions(res.priorityOptions);
      console.log(res);
      setTasks(res.todoList);
    });
  };

  useEffect(() => {
    fetchTodoList();
  }, []);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    reset();
    postRequest("/api/todo/create", data, fetchTodoList);
  };
  return (
    <>
      <h1 className="text-4xl m-2">Todo List</h1>
      <FormProvider {...hookForm}>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto">
          <div className="flex">
            <SelectBox label="Priority" registerName="priority" options={priorityOptions} />
            <TextInput label="Task" registerName={"task"} placeholder="Task" required />
          </div>
          <div className="flex justify-end">
            <SubmitButton label="Add" requestUrl="/" />
          </div>
        </form>
      </FormProvider>
      <div>
        {tasks?.map((t, index) => (
          <>
            <p key={index} className="max-w-4xl mx-auto">
              {t.priority} | {t.task}
            </p>
            <DeleteButton requestUrl={`/api/todo/delete/${t.id}`} callback={fetchTodoList} />
          </>
        ))}
      </div>
    </>
  );
};

export default Todo;
