import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <h1>Props Demo</h1>
    <MessageDemo message="Hi" username="mayuri"/>
    <MessageDemo message="Hello" username="cdac"/>
    <MessageDemo messsage="Hey" username="Student"/>
    </>
  );
}

function MessageDemo(props){
  console.log("i am inside",props);

  return (
    <>
    <h1>Hello {props.username}</h1>
    </>
  );
}
export default App;
