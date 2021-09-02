import "./App.css";
import axios from "axios";
import AppRouter from "./routers/AppRouter";

function App() {
  axios.defaults.baseURL = "http://localhost:9100";

  return (
    <div className="App">
      <AppRouter/>
    </div>
  );
}

export default App;
