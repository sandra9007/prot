import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      

<header id="header" className="header dark-background d-flex flex-column">
  <i className="header-toggle d-xl-none bi bi-list"></i>

  <div className="profile-img">
    <img src="assets/img/my-profile-img.jpg" alt="" className="img-fluid rounded-circle"/>
  </div>

  <a href="index.html" className="logo d-flex align-items-center justify-content-center">
    
    <h1 className="sitename">Sandra Santhosh</h1>
  </a>

  <div className="social-links text-center">
    
    <a href="www.linkedin.com/in/sandra-santhosh-273a30268

    " className="linkedin"><i className="bi bi-linkedin"></i></a>
  </div>

  <nav id="navmenu" className="navmenu">
    <ul>
      <li><a href="#hero" className="active"><i className="bi bi-house navicon"></i>Home</a></li>
      <li><a href="#about"><i className="bi bi-person navicon"></i> About</a></li>
      <li><a href="#resume"><i className="bi bi-file-earmark-text navicon"></i> Resume</a></li>
      <li><a href="#portfolio"><i className="bi bi-images navicon"></i> Portfolio</a></li>
      <li><a href="#services"><i className="bi bi-hdd-stack navicon"></i> Services</a></li>
      <li className="dropdown"><a href="#"><i className="bi bi-menu-button navicon"></i> <span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
        <ul>
          <li><a href="#">Dropdown 1</a></li>
          <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><a href="#">Deep Dropdown 1</a></li>
              <li><a href="#">Deep Dropdown 2</a></li>
              <li><a href="#">Deep Dropdown 3</a></li>
              <li><a href="#">Deep Dropdown 4</a></li>
              <li><a href="#">Deep Dropdown 5</a></li>
            </ul>
          </li>
          <li><a href="#">Dropdown 2</a></li>
          <li><a href="#">Dropdown 3</a></li>
          <li><a href="#">Dropdown 4</a></li>
        </ul>
      </li>
      <li><a href="#contact"><i className="bi bi-envelope navicon"></i> Contact</a></li>
    </ul>
  </nav>

</header>

<main className="main">

  
  <section id="hero" className="hero section dark-background">

    <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in" className=""/>

    <div className="container" data-aos="fade-up" data-aos-delay="100">
      <h2>Sandra Santhosh</h2>
      <p>I'm <span className="typed" data-typed-items="FrontEnd Developer,BackEnd Developer ,Web Developer ">Web Developer</span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span></p>
    </div>

  </section>

 
  <section id="about" className="about section">

    
    <div className="container section-title" data-aos="fade-up">
      <h2>About</h2>
      <p>Aspiring software developer with a solid academic foundation in Computer Science Engineering and hands-on experience in 
web development and Artifcial Intelligence. Profcient in HTML, CSS, JavaScript, React, and responsive design, with advanced 
knowledge of UI/UX principles</p>
    </div>

    <div className="container" data-aos="fade-up" data-aos-delay="100">

      <div className="row gy-4 justify-content-center">
        <div className="col-lg-4">
          <img src="assets/img/my-profile-img.jpg" className="img-fluid" alt=""/>
        </div>
        <div className="col-lg-8 content">
          <h2> Web Developer.</h2>
          <p className="fst-italic py-3">
           
          </p>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>29 January 2001</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>sandra99611@gmail.com</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+19 7736379007</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Ernakulam,Keral</span></li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
                <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>24</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>B.tech</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>sandra99611@gmail.com</span></li>
                
              </ul>
            </div>
          </div>
          <p className="py-3">
          passionate and skilled web developer with a strong background in front-end technologies such as HTML, CSS, JavaScript, and React. She specializes in creating responsive, user-friendly websites with a strong emphasis on UI/UX design principles. With practical experience gained through academic projects and internships, she is adept at building scalable digital solutions that meet modern web standards. Her ability to collaborate effectively in teams, combined with her problem-solving skills and continuous learning mindset, make her a valuable contributor to any web development project.
          </p>
        </div>
      </div>

    </div>

  </section>
  
  <section id="skills" className="skills section light-background">

    
    <div className="container section-title" data-aos="fade-up">
      <h2>Skills</h2>
      <p>Skills acuired by me</p>
    </div>

    <div className="container" data-aos="fade-up" data-aos-delay="100">

      <div className="row skills-content skills-animation">

        <div className="col-lg-6">

          <div className="progress">
            <span className="skill"><span>HTML</span> <i className="val">100%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div className="progress">
            <span className="skill"><span>CSS</span> <i className="val">90%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div className="progress">
            <span className="skill"><span>JavaScript</span> <i className="val">75%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

        </div>

        <div className="col-lg-6">

          <div className="progress">
            <span className="skill"><span>PHP</span> <i className="val">80%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill"><span>WordPress/CMS</span> <i className="val">90%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill"><span>Photoshop</span> <i className="val">55%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

        </div>

      </div>

    </div>

  </section>
  <section id="resume" className="resume section">

   
    <div className="container section-title" data-aos="fade-up">
      <h2>Resume</h2>
      <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
    </div>
    <div className="container">

      <div className="row">

        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <h3 className="resume-title">Sumary</h3>

          <div className="resume-item pb-0">
            <h4>Sandra Santhosh</h4>
            <p><em>dedicated web developer with a strong academic background, currently completed  B.Tech in Computer Science Engineering from Govt. Model Engineering College, Kochi, and holding a diploma in Computer Engineering from Govt. Polytechnic College, Perumbavoor. She is skilled in HTML, CSS, JavaScript, and React, with a strong focus on responsive design and UI/UX principles. </em></p>
            <ul>
              <li>Enjapuzha House,North Mazhuvannoor</li>
              <li>
                +9 7736379007
              </li>
              <li>sandra99611@gmail.com</li>
            </ul>
          </div>
          <h3 className="resume-title">Education</h3>
          <div className="resume-item">
            <h4>B.tech</h4>
            <h5>2022 - 2025</h5>
            <p><em>Govt. Model Engineering College, Kochi</em></p>
           
          </div>

          <div className="resume-item">
            <h4>Diploma in Computer Technology</h4>
            <h5>2019 - 2022</h5>
            <p><em>Govt. Polytechnic College, Perumbavoor</em></p>
   </div>

        </div>
<br>




</br>
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
          
          <div className="resume-item">
            <h4>Plus Two</h4>
            <h5>2017 - 2019</h5>
            <p><em>Mar Coorilose Memorial Higher Secondary School,Pattimattom </em></p>
            
          </div>
          <div className="resume-item">
            <h4>10th</h4>
            <h5>2017 </h5>
            <p><em>Nss Higher Secondary7 School,Valyanchiragara</em></p>
           
          </div>
        </div>

      </div>

    </div>

  </section>

  
  <section id="portfolio" className="portfolio section light-background">

   
    <div className="container section-title" data-aos="fade-up">
      <h2>Portfolio</h2>
      <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
    </div>
    <div className="container">

      <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

        <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
          <li data-filter="*" className="filter-active">All</li>
          <li data-filter=".filter-app">App</li>
          <li data-filter=".filter-product">Product</li>
          <li data-filter=".filter-branding">Branding</li>
          <li data-filter=".filter-books">Books</li>
        </ul>
        <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <div className="portfolio-content h-100">
              <img src="assets/img/portfolio/app-1.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href="assets/img/portfolio/app-1.jpg" title="App 1" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
            <div className="portfolio-content h-100">
              <img src="assets/img/portfolio/product-1.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Product 1</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href="assets/img/portfolio/product-1.jpg" title="Product 1" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            
      
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
            <div className="portfolio-content h-100">
              <img src="assets/img/portfolio/branding-1.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Branding 1</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href="assets/img/portfolio/branding-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
            <div className="portfolio-content h-100">
              <img src="assets/img/portfolio/books-1.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Books 1</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href="assets/img/portfolio/books-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <div className="portfolio-content h-100">
              <img src="assets/img/portfolio/app-2.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href="assets/img/portfolio/app-2.jpg" title="App 2" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
            <div className="portfolio-content h-100">
              <img src="assets/img/portfolio/product-2.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Product 2</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href="assets/img/portfolio/product-2.jpg" title="Product 2" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
            <div className="portfolio-content h-100">
              <img src="assets/img/portfolio/branding-2.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Branding 2</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href="assets/img/portfolio/branding-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
            <div className="portfolio-content h-100">
              <img src="assets/img/portfolio/books-2.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Books 2</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href="assets/img/portfolio/books-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <div className="portfolio-content h-100">
              <img src="assets/img/portfolio/app-3.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href="assets/img/portfolio/app-3.jpg" title="App 3" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
            <div className="portfolio-content h-100">
              <img src="assets/img/portfolio/product-3.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Product 3</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href="assets/img/portfolio/product-3.jpg" title="Product 3" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
            <div className="portfolio-content h-100">
              <img src="assets/img/portfolio/branding-3.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Branding 3</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href="assets/img/portfolio/branding-3.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
            <div className="portfolio-content h-100">
              <img src="assets/img/portfolio/books-3.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Books 3</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href="assets/img/portfolio/books-3.jpg" title="Branding 3" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>
          </div>

        </div>
</div>
      </div>

    </div>
</div>
  </section>


 
 
  <section id="contact" className="contact section">

    
    <div className="container section-title" data-aos="fade-up">
      <h2>Contact</h2>
      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
    </div>

    <div className="container" data-aos="fade-up" data-aos-delay="100">

      <div className="row gy-4">

        <div className="col-lg-5">

          <div className="info-wrap">
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Address</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p>+1 5589 55488 55</p>
              </div>
            </div>
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                <p>info@example.com</p>
              </div>
            </div>

            
          </div>
        </div>

        <div className="col-lg-7">
          <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
            <div className="row gy-4">

              <div className="col-md-6">
                <label for="name-field" className="pb-2">Your Name</label>
                <input type="text" name="name" id="name-field" className="form-control" required=""/>
              </div>

              <div className="col-md-6">
                <label for="email-field" className="pb-2">Your Email</label>
                <input type="email" className="form-control" name="email" id="email-field" required=""/>
              </div>

              <div className="col-md-12">
                <label for="subject-field" className="pb-2">Subject</label>
                <input type="text" className="form-control" name="subject" id="subject-field" required=""/>
              </div>

              <div className="col-md-12">
                <label for="message-field" className="pb-2">Message</label>
                <textarea className="form-control" name="message" rows="10" id="message-field" required=""></textarea>
              </div>

              <div className="col-md-12 text-center">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>

                <button type="submit">Send Message</button>
              </div>

            </div>
          </form>
        </div>

      </div>

    </div>

  </section>

</main>

<footer id="footer" className="footer position-relative light-background">

  <div className="container">
    <div className="copyright text-center ">
      <p>© <span>Copyright</span> <strong className="px-1 sitename">iPortfolio</strong> <span>All Rights Reserved</span></p>
    </div>
    <div className="credits">

      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> Distributed by <a href="https://themewagon.com">ThemeWagon</a>
    </div>
  </div>

</footer>


<a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>


{/* <div id="preloader"></div> */}

<script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="assets/vendor/php-email-form/validate.js"></script>
<script src="assets/vendor/aos/aos.js"></script>
<script src="assets/vendor/typed.js/typed.umd.js"></script>
<script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
<script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
<script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
<script src="assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"></script>
<script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
<script src="assets/vendor/swiper/swiper-bundle.min.js"></script>

<script src="assets/js/main.js"></script>

    </div>
  )
}

export default App


