import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomeContainer, Home } from './containers';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeContainer />}>
        <Route index element={<Home />}/>
      </Route>
    </Routes>
  );
}

export default App;
