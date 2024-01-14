import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/Login'
import { Products } from './pages/Products'
import { Logo } from './components/Logo'
import { Nav } from './components/Nav'

function App() {
  return (
    <>
      <header>
        <Logo />
        <Nav />
        <p>Merhaba, Burak Kuyucaklı</p>
      </header>
      <main>
        <Dashboard />
        <Login />
        <Products />
      </main>
      <footer>
        <p>Her hakkı saklıdır @ Java-11 Frontend</p>
      </footer>

    </>
  )
}

export default App
