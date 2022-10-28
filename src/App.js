import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar";
import Activity from "./pages/Activity";
import NewActivity from "./pages/NewActivity";

function App() {
  return (
    <Router>
      <TopBar/>
      <Routes>
        <Route path="/" element={<Activity/>}/>
        <Route path="/NewActivity" element={<NewActivity/>}/>
      </Routes>
    </Router>
  );
}

export default App;
