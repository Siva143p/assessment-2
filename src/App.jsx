import Home from "./components/main-comps/Home";
import { Button } from "./components/ui/button";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Button>Click Here</Button> */}
      <Router>
        <Home />

        <Routes>
          <Route path="#" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
