import styled from "styled-components";

export const Container = styled.form`
  display: grid;
  grid-template-columns: 1fr 90px;
  gap: 0.50rem;
  margin-top: -27px;
  margin-left: 10px;
  margin-right: 10px;

  input[type=text]{
    padding: 1rem;
    background: var(--gray-500);
    color: var(--gray-100);
    border: 2px solid var(--gray-700);
    border-radius: 8px;
  }

  input[type="text"]::placeholder{
    color: var(--gray-300)
  }

  input[type="text"]:focus{
    border: 2px solid var(--gray-500);
    outline: 2px solid var(--purple-700);
  }

  button[type="submit"]{
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: var(--gray-100);
    background: var(--blue-700);

    border-radius: 8px;
    border: 0;

    transition: background 0.2s
  }

  button[type="submit"]:hover{
    background: var(--blue-500);
  }
  
`