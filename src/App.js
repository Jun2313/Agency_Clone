import './App.css';
import './reset.css'
import Header from './screens/Header';
import Body from './screens/Body'

function Main() {
  return (
    <div className="App">
      <div style={{ position: 'relative'}}>
      <Header />
      <Body />
      </div>
    </div>
  );
}

export default Main;
