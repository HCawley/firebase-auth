import './App.css';
import ThemeProvider from './context/ThemeProvider/ThemeProvider';
import UserProvider from './context/UserProvider/UserProvider.jsx';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <UserProvider />
        </BrowserRouter>
    
    </div>
  );
}

export default App;
