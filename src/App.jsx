import { useState } from 'react'
import Menu from "./components/Menu"
import Banner from './components/Banner'
import Brands from './components/Brands'
import Model from './components/Model'
import Payday from './components/Payday'
import Young from './components/Young'
import Download from './components/Download'
import Community from './components/Community'


function App() {

  return (
   <>
  <Menu/>
  <Banner/>
  <Brands/>
  <Model/>
  <Payday/>
  <Young/>
  <Download/>
  <Community/>
   </>
  )
}

export default App
