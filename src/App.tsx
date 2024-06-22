import AppBar from './components/AppBar/AppBar';
import {Route, Routes} from 'react-router-dom';
import Home from './Containers/Home/Home';
import Agents from './Containers/Agents/Agents';
import Modes from './Containers/About/Modes';

const App = () => (
  <>
    <header>
      <AppBar/>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Modes" element={<Modes/>} />
        <Route path="/Agents" element={<Agents/>} />
        <Route path="*" element={<h1>Page Doesn't Exist</h1>} />
      </Routes>
    </main>
  </>
);


export default App;
