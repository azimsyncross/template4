function Pricing() {
  return (
    <section id="pricing" className="pricing section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Pricing</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">
        <div className="row g-4">
          {/* Basic Plan */}
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="pricing-card">
              <h3>Basic Plan</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">9.9</span>
                <span className="period">/ month</span>
              </div>
              <p className="description">Et harum quidem rerum facilis est et expedita distinctio nam libero tempore.</p>

              <h4>Featured Included:</h4>
              <ul className="features-list">
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Quae dolorem earum veritatis
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Nobis est eligendi optio cumque
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Quo neque error repudiandae
                </li>
              </ul>

              <a href="#" className="btn btn-primary">
                Buy Now
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Standard Plan */}
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="pricing-card popular">
              <div className="popular-badge">Most Popular</div>
              <h3>Standard Plan</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">19.9</span>
                <span className="period">/ month</span>
              </div>
              <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>

              <h4>Featured Included:</h4>
              <ul className="features-list">
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Lorem ipsum dolor sit amet
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Consectetur adipiscing elit
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Sed do eiusmod tempor
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Ut labore et dolore magna
                </li>
              </ul>

              <a href="#" className="btn btn-light">
                Buy Now
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div className="pricing-card">
              <h3>Premium Plan</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">39.9</span>
                <span className="period">/ month</span>
              </div>
              <p className="description">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.</p>

              <h4>Featured Included:</h4>
              <ul className="features-list">
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Temporibus autem quibusdam
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Saepe eveniet ut et voluptates
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Nam libero tempore soluta
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Cumque nihil impedit quo
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Maxime placeat facere possimus
                </li>
              </ul>

              <a href="#" className="btn btn-primary">
                Buy Now
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing 