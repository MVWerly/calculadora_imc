import { use, useState } from 'react'
import Title from './components/Title'
import Form from './components/Form'
import Result from './components/Result';
import Footer from './components/Footer';



function App() {
  const [imc, setImc] = useState(null);

  return (
    <div className="container">
      <Title/>
      <Form setImc={setImc}/>
      <Result imc={imc}/>
      <Footer/>
    </div>
  )
}

export default App
