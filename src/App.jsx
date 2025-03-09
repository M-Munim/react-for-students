// import './App.css'
import Card from './component/Card.jsx'
import Form from './component/Form.jsx'
import { useState } from 'react'
import UseE from './component/UseE.jsx';

function App() {
  // ----0 ----- update -------- state store 
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Hello!");


  const increment = () => {
    if (count === 10) {
      alert("count is 10")
      setCount(0)
    } else {
      setCount(count + 1);
    }
  }

  return (
    <>
      <h1>Count value is: {count}</h1>
      <button onClick={increment}>increment</button>

      <hr />
      <p>{text}</p>
      <button onClick={() => setText("Welcome to React!")}>Change Text</button>


      {/* app parent , child component(Card) */}
      <div className='card'>
        <Card heading="name" content="abdullah" />
        <Card heading="Contact" content="05555555" />
        <Card heading="email" content="3kSdM@example.com" />
        <Card heading="education" content="bachelors" />
      </div>
      <Form />
      <UseE />

    </>
  )
}

export default App
