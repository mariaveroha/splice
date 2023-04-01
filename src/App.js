import './App.css';
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';
import Catalog from './Components/Catalog/Catalog';
import WorkFlow from './Components/WorkFlow/WorkFlow';
import Studio from './Components/Studio/Studio';
import Dig from './Components/Dig/Dig';
import Creators from './Components/Creators/Creators'
import Final from './Components/Final/Final'
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <div className='container'>
      <Header />
      <Main />
      <Catalog />
      <WorkFlow />
      <Studio />
      <Dig />
      <Creators />
      <Final />
      <Footer />
    </div>
  );
}

export default App;
