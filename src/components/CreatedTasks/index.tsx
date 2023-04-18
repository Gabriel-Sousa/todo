import { CheckCircle, Circle, Trash } from "phosphor-react";
import { task } from "../../types";
import { Container } from "./styles";
import clipboardImg from "../../assets/clipboard.svg";

interface CreatedTasksProps {
  onCheckTask: (date: task[]) => void;
  onDeleteTask: (id: number) => void;
  tasks: task[];
}

export function CreatedTasks({
  tasks,
  onCheckTask,
  onDeleteTask,
}: CreatedTasksProps) {
  function handleCheck(id: number) {
    const taskModified = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    onCheckTask(taskModified);
  }

  const quantityTask = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;
  return (
    <Container>
      <header>
        <div className="createdTasks">
          Tarefas criadas <span>{tasks.length}</span>
        </div>

        <div className="finishedTasks">
          Concluídas
          <span>
            {completedTasks} de {quantityTask}
          </span>
        </div>
      </header>

      <main>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <button onClick={() => handleCheck(task.id)}>
                {task.isCompleted ? (
                  <CheckCircle
                    size={24}
                    weight={"fill"}
                    className="checked"
                    colorInterpolation={"red"}
                  />
                ) : (
                  <Circle size={24} weight={"duotone"} className="circle" />
                )}
              </button>
              {task.isCompleted ? (
                <div className="completedTaskTitle">{task.tittle}</div>
              ) : (
                <div>{task.tittle}</div>
              )}
              <button
                onClick={() => {
                  onDeleteTask(task.id);
                }}
              >
                <Trash size={24} className="deleteButton" />
              </button>
            </li>
          ))}
        </ul>
      </main>
      {tasks.length == 0 && (
        <section className="noneTask">
          <img src={clipboardImg} alt="" />
          <strong> Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </section>
      )}
    </Container>
  );
}
