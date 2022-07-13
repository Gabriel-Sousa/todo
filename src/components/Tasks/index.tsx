import { useState } from "react";
import { task } from "../../types";
import { CreatedTasks } from "../CreatedTasks";
import { Search } from "../Search";
import { Container } from "./styles";

export function Tasks() {
  const [tasks, setTasks] = useState<task[]>(() => {
    const storagedCart = localStorage.getItem("@DoTo");

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }
    return [];
  });

  function newTasks(date: task) {
    setTasks([...tasks, date]);
    localStorage.setItem("@DoTo", JSON.stringify([...tasks, date]));
  }

  function checkedTask(date: task[]) {
    setTasks(date);
    localStorage.setItem("@DoTo", JSON.stringify(date));
  }

  function deleteTask(id: number) {
    const updatedTask = tasks.filter((task) => task.id !== id);
    setTasks(updatedTask);
    localStorage.setItem("@DoTo", JSON.stringify(updatedTask));
  }

  return (
    <Container>
      <Search onNewTasks={newTasks} tasks={tasks} />
      <CreatedTasks
        tasks={tasks}
        onCheckTask={checkedTask}
        onDeleteTask={deleteTask}
      />
    </Container>
  );
}
