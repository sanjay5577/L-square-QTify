import { Route, Routes } from "react-router-dom";
import Home from "./components/Home"
import './App.css';
import { StyledEngineProvider } from '@mui/material/styles';

function App() {
  return (
    <StyledEngineProvider injectFirst>
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Home/>}/>
        
          
        </Routes>
      
    </div>
    </StyledEngineProvider>
  );
}

export default App;
