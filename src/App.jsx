import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import "./App.css";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;















