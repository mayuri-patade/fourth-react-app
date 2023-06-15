import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <h1>Props Demo</h1>
    <MessageDemo  username="mayuri" email="m@gmail.com"/>
    <MessageDemo  username="cdac" email="c@gmail.com"/>
    <MessageDemo  username="Student" email="s@gmail.com"/>
    </>
  );
}

function MessageDemo({ username,email }){
 

  return (
    <>
    <h1>Hello {username} {email}</h1>
    </>
  );
}
export default App;
