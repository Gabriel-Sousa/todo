import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  margin-left: 10px;
  margin-right: 10px;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
  }

  header .createdTasks {
    color: var(--blue-500);
    font-weight: bold;

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  header .createdTasks > span {
    color: var(--gray-100);
    background: var(--gray-400);
    padding: 0.125rem 0.5rem;
    border-radius: 999px;
  }

  header .finishedTasks {
    color: var(--purple-500);
    font-weight: bold;

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  header .finishedTasks > span {
    color: var(--gray-100);
    background: var(--gray-400);
    padding: 0.125rem 0.5rem;
    border-radius: 999px;
  }

  main ul li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;

    background: var(--gray-400);
    padding: 1rem;
    border-radius: 8px;

    margin-bottom: 1.25rem;
  }

  main ul li + li {
    margin-bottom: 1.25rem;
  }

  main button {
    background: transparent;
    border: 0;
  }

  main ul li .circle {
    color: var(--blue-500);
    transition: color 0.2s;
  }

  main ul li .circle:hover {
    color: var(--blue-700);
    background: var(--blue-700) 0.2;
  }

  main ul li .checked {
    color: var(--purple-700);
  }

  main ul li .checked:hover {
    color: var(--purple-500);
  }

  main ul li .deleteButton {
    color: var(--gray-300);
    transition: color 0.2s;
  }

  main ul li .deleteButton:hover {
    color: var(--red-500);
    background: var(--gray-500);
  }

  main div {
    max-width: 39.5rem;
    color: var(--gray-100);
    width: 100%;
  }

  .finished {
    text-decoration: line-through;
    color: var(--gray-300);
  }

  .noneTask {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 8px;
    border-top: 2px solid var(--gray-400);

    padding-top: 4rem;
    color: var(--gray-300);
  }

  .noneTask img {
    margin-bottom: 1rem;
  }
  .completedTaskTitle{
    color: #808080
  }
`;
