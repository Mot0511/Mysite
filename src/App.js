import cl from './style.module.css'
import Header from'./components/header/header'
import WelcomeWin from "./components/welcomeWin/welcomeWin";
import Sites from "./components/sites/sites";

function App() {
  return (
    <div className="App">
      <Header />
      <WelcomeWin />
        <Sites />
    </div>
  );
}

export default App;
