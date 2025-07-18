import './index.css';
import Header from './components/Header.tsx';
import RestroContainer from './components/RestroContainer.tsx';

function App() {
   return (
      <div className="max-w-screen-xl mx-auto px-10 bg">
         <Header />
         <RestroContainer />
      </div>
   );
}

export default App;
