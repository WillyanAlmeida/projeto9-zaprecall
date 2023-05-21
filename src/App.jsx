import { useState } from 'react'

import styled from 'styled-components'
import GlobalStyle from './globalStyles.js'
import Welcome from './Welcome.jsx'
import Zaprecall from './Zaprecall.jsx'
const img = {
  logo:"./src/assets/logo.png", 
  play:"./src/assets/seta_play.png",
  virar:"./src/assets/seta_virar.png",
  certo:"./src/assets/icone_certo.png",
  erro:"./src/assets/icone_erro.png",
  quase:"./src/assets/icone_quase.png",
  party:"./src/assets/party.png",
  sad:"./src/assets/sad.png"
}




function App() {
  const [count, setCount] = useState(0)
  let [iniciar, setIniciar]= useState('flex');
  

  return (
    <>
    <GlobalStyle />
    <Welcome iniciar={iniciar} setIniciar={setIniciar} img={img}/>
    <Zaprecall img={img} iniciar={iniciar} />
    </>
  )
}

export default App
