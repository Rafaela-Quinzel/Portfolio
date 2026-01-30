import MainPage from './pages/MainPage/MainPage'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './styles/global.css'
import React from 'react'

function App(): JSX.Element {
  React.useEffect(() => {
    AOS.init()
  }, [])

  return (
    <MainPage />
  )
}
export default App
