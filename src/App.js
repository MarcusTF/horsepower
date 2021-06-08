import './App.css'

import InputContainer from './components/InputContainer'
import ComparerContainer from './components/Comparer/ComparerContainer'
import OptionsContainer from './components/OptionsContainer/OptionsContainer'

import { GlobalProvider } from './Context/GlobalContext'

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <main className="main">
          <InputContainer type="crank" />
          <InputContainer type="wheels" />
        </main>
        <OptionsContainer />
        <ComparerContainer />
      </GlobalProvider>
    </div>
  )
}

export default App
