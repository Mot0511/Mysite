import cl from './style.module.css'
import Header from'./components/header/header'
import WelcomeWin from "./components/welcomeWin/welcomeWin";
import Projects from "./components/projects/projects";
import Aboutme from "./components/aboutme/aboutme";

function App() {
  return (
    <div className="App">
      <Header />
      <WelcomeWin />
        <Projects />
        <Aboutme />
    </div>
  );
}

export default App;
