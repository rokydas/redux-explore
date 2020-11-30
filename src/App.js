import './App.css';
import Cart from './components/Cart/Cart';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
        <h1 className="text-center mt-5">Welcome to our shop</h1>
        <Shop />
        <Cart />
    </div>
  );
}

export default App;
