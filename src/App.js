import {useState} from 'react';
import './App.css';
import {List} from './components/List';
import Form from './components/Form';

function App() {
  const [list, setList] = useState([])
  const appStyle={
    margin:'20px'
  }
  return (
    <div style={appStyle} className="App">
      <Form list={list} setList={setList}/>
      <List list={list} setList={setList}/>
    </div>
  );
}

export default App;