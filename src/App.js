import Home from './routes/home.component';
import {Routes,Route,Outlet} from 'react-router-dom';
import Navigation from './routes/navigation.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;