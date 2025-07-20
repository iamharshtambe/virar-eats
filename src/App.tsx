import './index.css';
import Header from './components/Header.tsx';
import { Outlet } from 'react-router-dom';

function App() {
   return (
      <div className="max-w-screen-xl mx-auto px-10 bg">
         <Header />
         <Outlet />
      </div>
   );
}

export default App;
