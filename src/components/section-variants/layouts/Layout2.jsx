import PropTypes from 'prop-types'
import Header2 from './headers/Header2'
import Footer2 from './footers/Footer2'

function Layout2({ children }) {
  return (
    <div className="layout-2">
      <Header2 />
      <main>{children}</main>
      <Footer2 />
    </div>
  )
}

Layout2.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout2 