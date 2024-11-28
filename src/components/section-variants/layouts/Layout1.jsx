import PropTypes from 'prop-types'
import Header1 from './headers/Header1'
import Footer1 from './footers/Footer1'

function Layout1({ children }) {
  return (
    <>
      <Header1 />
      <main>{children}</main>
      <Footer1 />
    </>
  )
}

Layout1.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout1 