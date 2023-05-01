import './App.css';
import ContextProvider from './context/Context';
import MyRoutes from './Routes/Routes';

function App() {
  return (
    <div className="App">
      <ContextProvider>
       <MyRoutes />
       </ContextProvider>
    </div>
  );
}

export default App;
