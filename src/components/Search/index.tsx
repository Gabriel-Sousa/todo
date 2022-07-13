import { PlusCircle } from "phosphor-react";
import { FormEvent, useState } from "react";
import { task } from "../../types";
import { Container } from "./styles";

interface SearchProps {
  tasks: task[];
  onNewTasks: (date: task) => void;
}

export function Search({ tasks, onNewTasks }: SearchProps) {
  const [newTask, setNewTask] = useState("");

  function handleNewTasks(event: FormEvent) {
    event.preventDefault();

    const taskWithAllData = {
      id: Math.random(),
      tittle: newTask,
      isCompleted: false,
    };

    onNewTasks(taskWithAllData);
    setNewTask("");
  }

  return (
    <Container onSubmit={handleNewTasks}>
      <input
        type="text"
        name="task"
        placeholder="Adicione uma nova tarefa"
        required
        onChange={(event) => setNewTask(event.target.value)}
        value={newTask}
        autoComplete="off"
      />
      <button type="submit">
        Criar
        <PlusCircle size={16} />
      </button>
    </Container>
  );
}
