import './App.css';
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Content from "./components/content/Content";

function App() {
    return (
        <div className="App">
            <Header/>
            <Sidebar/>
            <Content/>
        </div>
    );
}

export default App;