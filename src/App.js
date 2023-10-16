import './style.css'
import Header from'./components/header/header'
import WelcomeWin from "./components/welcomeWin/welcomeWin";
import Projects from "./components/projects/projects";
import Aboutme from "./components/aboutme/aboutme";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProjectPage from "./components/projectPage/projectPage";

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Header />
              <Routes>
                  <Route path={'/'} element={<Projects />} />
                  <Route path={'/:id'} element={<ProjectPage />} />
              </Routes>
              <Aboutme />
          </BrowserRouter>
      </div>
  );
}

export default App;
