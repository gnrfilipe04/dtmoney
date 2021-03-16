import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header/inde";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}

export default App;
