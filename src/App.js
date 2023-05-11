import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotPassword from "./Component/Auth/ForgotPassword";
import Login from "./Component/Auth/Login";
import Home from "./Component/Home/Home";
import Incident from "./Component/Incident/Incident";
import Navbar from "./Component/Navbar/Navbar";
import OverView from "./Component/Overview/OverView";
import Request from "./Component/Request/Request";
import Ticket from "./Component/Ticket/Ticket";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<OverView />} />
        <Route path="/incident" element={<Incident />} />
        <Route path="/request" element={<Request/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/ticket" element={<Ticket />} />


        {/* <Route path="/requests" element={<Requests />} /> */}
      </Routes>
    </Router>

      
      {/* <Login/> */}
      {/* <ForgotPassword/> */}
    </div>
  );
}

export default App;
