import PropTypes from 'prop-types'

const Banner = ({ title }) => {
  return (
    <section className="page-title light-background">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center">
          <div className="col-lg-8 mx-auto text-center">
            <div className="banner-content" data-aos="fade-up" data-aos-delay="200">
             
 

              

              <div className="breadcrumbs-wrapper bg-white p-3 rounded-pill d-inline-flex align-items-center shadow-sm">
                <nav className="breadcrumbs">
                  <ol className="m-0 p-0 d-flex align-items-center list-unstyled">
                    <li>
                      <a href="/" className="text-primary text-decoration-none">
                        <i className="bi bi-house-door me-2"></i>
                        Home
                      </a>
                    </li>
                    <li className="mx-3 text-gray-500">/</li>
                    <li className="text-gray-700">{title}</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="row stats-row gy-4 mt-5" data-aos="fade-up" data-aos-delay="300">
          <div className="col-lg-4 col-md-6 mx-auto">
            <div className="stat-item">
              <div className="stat-icon">
                <i className="bi bi-graph-up"></i>
              </div>
              <div className="stat-content">
                <h4>Industry Leader</h4>
                <p className="mb-0">Top-rated solutions provider</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mx-auto">
            <div className="stat-item">
              <div className="stat-icon">
                <i className="bi bi-people"></i>
              </div>
              <div className="stat-content">
                <h4>Expert Support</h4>
                <p className="mb-0">24/7 dedicated assistance</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mx-auto">
            <div className="stat-item">
              <div className="stat-icon">
                <i className="bi bi-shield-check"></i>
              </div>
              <div className="stat-content">
                <h4>Trusted Choice</h4>
                <p className="mb-0">100% satisfaction guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

Banner.propTypes = {
  title: PropTypes.string.isRequired
};