import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import WaitingRoom from './Components/WaitingRoom';

function App() {
  return (
    <div>
      <main><Container><Row class="px-5 my-5">
        <h1 className='font-weight-light'>Welcome to the F1 Chat App</h1>
        </Row></Container></main>
        <WaitingRoom></WaitingRoom>
    </div>
  );
}

export default App;
