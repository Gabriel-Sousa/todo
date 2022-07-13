import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { GlobalStyle } from "./style/global";

export function App() {
  return (
    <>
      <Header />
      <Tasks />
      <GlobalStyle />
    </>
  );
}
