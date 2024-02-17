import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import AppContext from "./context/AppContext";
import Shoe from "./pages/Shoe";

function App() {
  return (
    <AppContext>
      <div className="font-inter h-auto">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:ShoeName" element={<Shoe />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Router>
      </div>
    </AppContext>
  );
}

export default App;
