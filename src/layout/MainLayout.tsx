import { Outlet } from 'react-router-dom'
import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'

const MainLayout = () => {
  return (
    <main>
        <Header />
        <Outlet />
        <Footer />
    </main>
  )
}

export default MainLayout
