import { useState } from 'react'

import styled from 'styled-components'
import GlobalStyle from './globalStyles.js'
import Welcome from './Welcome.jsx'
import Zaprecall from './Zaprecall.jsx'
const logo = "./src/assets/logo.png"



function App() {
  const [count, setCount] = useState(0)
  let [iniciar, setIniciar]= useState('flex');
  

  return (
    <>
    <GlobalStyle />
    <Welcome iniciar={iniciar} setIniciar={setIniciar} logo={logo}/>
    <Zaprecall logo={logo} iniciar={iniciar} />
    </>
  )
}

export default App
