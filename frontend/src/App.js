import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="py-3">
        <Router>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact />
            {/* <Route path="/" Component={HomeScreen} exact /> */}
          </Routes>
        </Router>
      </main>
      <Footer />
    </div>
  );
}

export default App;
