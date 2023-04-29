import './App.css'
import ButtonFatec from './components/ButtonFatec'
import InputFatec from './components/InputFatec'

function App() {

  return (
    <>
      <p>
        <h2>Entre em contato</h2>
        <hr color='red'/>
        <InputFatec type="text" placeholder="Nome"/><br />
        <InputFatec type="text" placeholder="Email"/><br />
        <InputFatec type="text" placeholder="Telefone"/><br />
        <hr color='red'/>
      </p>
      <ButtonFatec type="button" label="Enviar mensagem" />
    </>
  )
}

export default App
