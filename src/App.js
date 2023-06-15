import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <h1>Props Demo</h1>
    <MessageDemo />
    <MessageDemo />
    <MessageDemo />
    </>
  );
}

function MessageDemo(){
  return <><h1>Hello Message</h1></>
}
export default App;
