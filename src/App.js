import logo from "./logo.svg";
import "./App.css";
import SignIn from "./components/SignIn";
import Sidebar from "./components/Sidebar";
import PrortFolio from "./components/PrortFolio";
import Header from "./components/Header";
import Payroll from "./components/Payroll";

function App() {
  return (
    <div className="App">
      <Header />
      <Payroll />
    </div>
  );
}

export default App;
