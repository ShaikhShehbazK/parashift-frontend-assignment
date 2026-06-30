import Home from "./pages/Home";
import LatestFromGround from "./components/latestFromGround/LatestFromGround";
import FloatingActions from "./components/latestFromGround/FloatingActions";
function App() {
  return (
    <div className="font-sans">
      <Home />
      <FloatingActions/>
    </div>
  );
}

export default App;

