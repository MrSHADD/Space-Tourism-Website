import React from "react"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Destination from "./components/Destination";
import Header from "./components/Header";
import Main from "./components/Main";
import FrontPage from "./components/FrontPage"

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPage />}>
            <Route index element={<Destination />} />
            <Route path="destination" element={<Destination />} />
            {/* <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
