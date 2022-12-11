import cl from './style.module.css'
import Header from'./components/header/header'
import WelcomeWin from "./components/welcomeWin/welcomeWin";

function App() {
  return (
    <div className="App">
      <Header />
      <WelcomeWin />
    </div>
  );
}

export default App;
