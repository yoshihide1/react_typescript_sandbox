import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import SubmitButton from '../components/button/SubmitButton';
import { postRequest } from '../components/common/Request';
import SelectBox from '../components/field/SelectBox';
import TextInput from '../components/field/TextInput';

type Inputs = {
  priority: string;
  task: string;
};

const Todo = () => {
  const hookForm = useForm<Inputs>();
  const { handleSubmit, reset } = hookForm;
  const [tasks, setTasks] = useState<Inputs[]>([]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setTasks((prevTasks) => [...prevTasks, data]);
    reset();
    postRequest('/api/todo/create', data);
    console.log(data);
  };
  return (
    <>
      <h1 className="text-4xl m-2">Todo List</h1>
      <FormProvider {...hookForm}>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto">
          <div className="flex">
            <SelectBox label="Select Priority..." registerName="priority" priority="test" />
            <TextInput label="Add Task..." registerName={'task'} />
          </div>
          <div className="flex justify-end">
            <SubmitButton label="Add" requestUrl="/" />
          </div>
        </form>
      </FormProvider>
      <div>
        {tasks.map((t, index) => (
          <p key={index} className="max-w-4xl mx-auto">
            {t.priority} {t.task}
          </p>
        ))}
      </div>
    </>
  );
};

export default Todo;
