import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login.js";
import Protected from "./components/Protected.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/protected" element={<Protected />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
