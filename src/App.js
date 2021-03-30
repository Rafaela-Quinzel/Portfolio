import MainPage from './pages/MainPage/MainPage'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './styles/global.css'

function App() {
  AOS.init()

  return (
    <div>
      <MainPage />
    </div>
  )
}

export default App
