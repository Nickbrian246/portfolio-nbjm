import Home from './pages/home'
import './App.css'
import { Language} from "../src/store";
import { useState } from 'react';

function App() {
const [isEnglish, setIsEnglish] = useState<boolean>(false)

const handleLanguageState = () :void=>{
  setIsEnglish((prevState) => ! prevState)
}
const language = {
  language:isEnglish,
  handleState: handleLanguageState,
}

  return (
    <>
    <Language.Provider value={language}>
      <Home/>
    </Language.Provider>
    </>
  )
}

export default App
