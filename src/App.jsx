import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header/Header'
import { Guesscountry } from './components/Guesscountry/Guesscountry'
import { Guesspopulation } from './components/Guesspopulation/Guesspopulation'
import { Country } from './components/Country/Country'
import { Guesscapital } from './components/Guesscapital/Guesscapital'

function App() {
  return (
    <>
      <div>
        <Header />

        <Routes>
          <Route path='/' element={<Guesscountry />} />
          <Route path='/Guesspopulation' element={<Guesspopulation />} />
          <Route path='/country/:name' element={<Country></Country>}></Route>
          <Route
            path='/guesscapital'
            element={<Guesscapital></Guesscapital>}
          ></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
