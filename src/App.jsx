import { use, useState } from 'react'
import Title from './components/Title'
import Form from './components/Form'
import Result from './components/Result';



function App() {
  const [imc, setImc] = useState(null);

  return (
    <div className="container">
      <Title/>
      <Form setImc={setImc}/>
      <Result imc={imc}/>
    </div>
  )
}

export default App
