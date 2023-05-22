import { useState } from 'react'
import GlobalStyle from './globalStyles.js'
import Welcome from './Welcome.jsx'
import Zaprecall from './Zaprecall.jsx'
import logo from "../src/assets/logo.png"
import play from "../src/assets/seta_play.png"
import virar from "../src/assets/seta_virar.png"
import certo from "../src/assets/icone_certo.png"
import erro from "../src/assets/icone_erro.png"
import quase from "../src/assets/icone_quase.png"
import party from "../src/assets/party.png"
import sad from "../src/assets/sad.png"


function App() {
  const img = {logo: logo, play: play, virar: virar, certo: certo, erro: erro, quase: quase, party: party, sad: sad}
  const [count, setCount] = useState(0)
  let [iniciar, setIniciar]= useState('flex');  

  return (
    <>
    <GlobalStyle />
    <Welcome iniciar={iniciar} setIniciar={setIniciar} img={img}/>
    <Zaprecall img={img} iniciar={iniciar} setCount={setCount} count={count}/>
    </>
  )
}

export default App
