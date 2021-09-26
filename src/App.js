import './App.css';
import CardShop from './components/CardShop/CardShop';
import Header from './components/Header/Header';


function App() {
  return (
    <div>
      {/* Header Area */}
      <Header></Header>

      {/* Cards & Shop Area */}
      <CardShop></CardShop>
    </div>
  );
}

export default App;
