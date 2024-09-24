import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import SubmitButton from "../components/button/SubmitButton";
import TextInput from "../components/field/TextInput";
import { useState } from "react";

type Inputs = {
  task: string;
};

const Todo = () => {
  const hookForm = useForm<Inputs>();
  const { handleSubmit, reset } = hookForm;
  const [tasks, setTasks] = useState<Inputs[]>([]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setTasks((prevTasks) => [...prevTasks, data]);
    reset();
    console.log(data);
  };
  return (
    <>
      <h1 className="text-4xl m-2">Todo List</h1>
      <FormProvider {...hookForm}>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto">
          <TextInput label="Add Task..." registerName={"task"} />
          <div className="flex justify-end">
            <SubmitButton label="Add" requestUrl="/" />
          </div>
        </form>
      </FormProvider>
      <div>
        {tasks.map((t, index) => (
          <p key={index} className="max-w-4xl mx-auto">
            {t.task}
          </p>
        ))}
      </div>
    </>
  );
};

export default Todo;
