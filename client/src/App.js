import "./App.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import LoginPage from "./components/login/LoginPage";
import {BrowserRouter} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <LoginPage />
      
      </BrowserRouter>
    </div>
  );
}

export default App;
