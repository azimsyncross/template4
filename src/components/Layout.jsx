import { Outlet } from 'react-router-dom'
import Header from './Header'
import "./section-variants/styles.css"
import Footer from './section-variants/layouts/footers/Footer1'

function Layout() {
  return (
    <div className="index-page">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout 