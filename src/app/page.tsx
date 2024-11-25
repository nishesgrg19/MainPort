"use client";

export default function Home() {
  return (
    <div>



      <div className="nav1">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>


              <div className='naherney  navbar-collapse' id="navbarText">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-dark">

                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#"> <i className="bi bi-house-door-fill px-2" />HOME</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active x-2" href="#skills"><i className="bi bi-person-workspace px-2" />SKILLS</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active x-2" href="#hobby"><i className="bi bi-person-workspace px-2" />HOBBIES</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#project"><i className="bi bi-pencil-square px-2" />PROJECTS</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#certificate"><i className="bi bi-trophy-fill px-2" />CERTIFICATES</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#footer"><i className="bi bi-telephone px-2" />CONTACT</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <section className="section1 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="box1" data-aos="fade-right" data-aos-offset={300} data-aos-easing="ease-in-sine">
                <div className="box11">
                  <h1 className="text-a">

                  </h1>
                  <h1 className="text-b"></h1>
                  <span className="font">HI, </span><span className="h5">Welcome! I’m Nishes Gurung, a dedicated developer with a
                    passion for creating intuitive and powerful web and mobile applications. By profession, I’m deeply
                    invested in the world of technology, always pushing boundaries to build meaningful digital solutions.
                    Outside of work, I find energy and inspiration in MMA, Stocks Invest, fitness,music and hiking – pursuits that keep me
                    grounded and driven. This portfolio is a glimpse into my work, my journey, and my commitment to both
                    personal and professional growth.
                    <br />
                    <nav className="nav2">
                      <ul>
                        <li><a href="https://github.com/"><i className="bi bi-github" /> </a></li>
                        <li><a href="https://www.linkedin.com/"><i className="bi bi-linkedin" /> </a></li>
                        <li><a href="https://twitter.com/"><i className="bi bi-twitter" /></a></li>
                      </ul>
                    </nav>
                  </span></div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section11">
              </div>
            </div>
          </div>`
        </div>
      </section>
      <div className="container">
        <section className="section2 ">
          <div className="skills text-center " id="skills">
            <p className="py-4 w_text " data-aos="fade-up" data-aos-duration={7000}> SKILLS </p>
            <div className="box2">
              <div className="box21">
                <p>HTML5</p>
                <p>CSS3</p>
                <p>React.Js</p>
                <p>Javascript</p>
                <p>Bootstrap</p>
                <p>Python</p>
                <p>Figma</p>
              </div>
              <div className="box22">
                <span className="html">
                  <p className="html5" />
                </span>
                <span className="html">
                  <p className="css" />
                </span>
                <span className="html">
                  <p className="react" />
                </span>
                <span className="html">
                  <p className="javascript" />
                </span>
                <span className="html">
                  <p className="bootstrap" />
                </span>
                <span className="html">
                  <p className="django" />
                </span>
                <span className="html">
                  <p className="html5" />
                </span>
              </div>
            </div>
          </div>
          <p className="text-muted skill_b">
            I specialize in creating engaging, visually appealing web experiences with a strong focus on frontend
            development. My expertise spans HTML, CSS, and JavaScript, along with React for building dynamic user
            interfaces. I also bring design insight with Figma, crafting intuitive layouts and responsive designs. While
            my passion lies in frontend work, I complement it with backend knowledge in Python, enabling me to build
            seamless, full-stack applications. Together, these skills allow me to create functional and beautiful websites
            that offer exceptional user experiences.
          </p>
        </section>
        <section className="section3 text-center py-4 " id="project">
          <a className="btn btn-success" href="https://github.com/nishesgrg19" data-aos="fade-up" data-aos-anchor-placement="top-bottom">GITHUB LINK</a>
          <p className="py-4 w_text"> PROJECTS</p>
          <div className="box3  my-5">
            <div className="row">
              <div className="col-lg-3">
                <div className="box31 ">
                  <img src="/images/Vesper.JPG" />

                  <a className="btn" href="https://nishesgrg19.github.io/Vespo_Frontend2/">Visit</a>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="box31 ">
                  <img src="images/Ecommerce.JPG" />
                  <a className="btn" >Visit</a>
                </div>
              </div>
              <div className="col-lg-3" data-aos="zoom-in-left">
                <div className="box31 ">
                  <img src="images/NGO.JPG" />
                  <a className="btn" href="https://nishesgurung.github.io/Frontend-Project1/">Visit</a>
                </div>
              </div>
            </div>
            <div className="row py-3">
              <div className="col-lg-3">
                <div className="box31 ">
                  <img src="images/Newspaper.JPG" />
                  <a className="btn" href="https://nishesgrg19.github.io/FRONTEND-3_NEWS/">Visit</a>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="box31 ">
                  <img src="images/Reastate.JPG" />
                  <a className="btn">Visit</a>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="box31 ">
                  <img src="images/react.JPG" />
                  <a className="btn" href="https://nishesgrg19.github.io/React-portfolio-prj/">Visit</a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
      <div className="banner_high">
        <div className="overlay">
        </div>
        <div className="high_c">
          <h2 className="animated-text">FUTURE WILL BE FUN USING ARTIFICAL INTILLEGENCEEE</h2>

        </div>
      </div>
      <div className="container">
        <div className="hobby text-center my-5" id="hobby">
          <p className="w_text">MY HOBBIES</p>


          <div className="row my-5">
            <div className="col-lg-4 ">
              <div className="card c1 mx-auto" style={{ width: '18rem' }}>
                <img src="images/music.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">
                    Music has always been my passion. From exploring
                    diverse genres to creating melodies, I find inspiration in every note.
                    It’s not just a hobby—it’s how I connect, express, and unwind. Let’s vibe together!

                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="card mx-auto" style={{ width: '18rem' }}>
                <img src="images/barber.jpg" className="card-img-top" alt="..." style={{ height: '200px' }} />
                <div className="card-body">
                  <p className="card-text">
                    Styling hair is more than just a hobby for me—it’s an art form.
                    Whether it’s creating sharp fades, trendy cuts, or classic styles,
                    I enjoy transforming looks and boosting confidence.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="card mx-auto" style={{ width: '18rem' }}>
                <img src="images/fitness.jpg" className="card-img-top" alt="..." style={{ height: '200px' }} />
                <div className="card-body">
                  <p className="card-text">
                    Fitness is my way of life! From lifting weights to exploring new workout routines,
                    I’m passionate about staying active and pushing my limits.
                    It’s all about strength, discipline, and a healthy mind-body connection.
                  </p>
                </div>
              </div>
            </div>


          </div>
          <p className="skill_b">
            Besides my career in tech development, I deeply cherish my side hobbies that keep me creative and balanced. Music allows me to unwind and express myself through rhythms and melodies. Fitness fuels my energy, helping me stay active and focused on my goals. Additionally, my passion for hair cutting lets me channel my creativity, transforming styles and connecting with people. These hobbies not only bring joy but also inspire fresh perspectives in my professional journey.
          </p>
        </div>
      </div>

      <div className="container">

        <section className="text-center fig_prj py-5">


          <p className="py-4 w_text" data-aos="fade-up" data-aos-duration={7000}>FIGMA DESIGNS </p>
          <div className="piz_prj">
            <div className="row ">
              <div className="col-lg-6 my-3 text-center pizcard">
                <img src="images/piza_figma.PNG" alt='' width="350px" className="mx-auto" />
              </div>
              <div className="col-lg-6 my-3 pizcard">
                <img src="images/scoter_figma.PNG" alt='' width="350px" className="mx-auto" />
              </div>

            </div>
            <p className="py-5 fig_des">With a focus on clean, user-centered design, I’ve recently developed Figma samples for a pizza
              menu and a
              scooter service menu. For the pizza menu, I emphasized vibrant, inviting visuals and an intuitive layout that
              guides users through options seamlessly, enhancing both visual appeal and ease of ordering. For the scooter
              menu, I prioritized clarity and efficiency, creating a sleek interface that makes navigation straightforward
              for users looking to browse, book, or learn about different scooter models. These designs showcase my ability
              to blend aesthetics with functionality, ensuring an engaging user experience across diverse themes.</p>
          </div>

        </section>

        <section className="certificates " id="certificate">
          <div className="container">
            <div className="certify text-center">
              <p className="py-4 w_text">CERTIFICATES</p>
              <div className="row  py-5">
                <div className="col-lg-7 text-center">
                  <img src="images/python_main.png" className="mx-auto" width="350px" />
                  <h6 className="py-2"> Backend WEB (Django)</h6>
                </div>
                <div className="col-lg-5">
                  <img src="images/frontend.png" className="mx-auto" width="350px" />
                  <h6 className="py-2">Frontend WEB (REACT)</h6>
                </div>
              </div>
              <p className="fig_des">Completed certification from Broadway Infosys in Frontend Development (React) and Backend Development
                (Django), demonstrating a comprehensive understanding of modern web development. Proficient in crafting
                dynamic, responsive, and user-friendly interfaces with React and building robust, secure backends with Django.
                Equipped with hands-on experience in designing, developing, and deploying full-stack web applications, skilled
                in seamlessly integrating frontend and backend functionalities for optimal performance and user experience.
              </p>
            </div>
          </div>
        </section>
      </div>

      <footer id="footer">
        <div className="container">
          <div className="row box5 ">
            <div className="col-lg-4">
              <p>Copyright © 2022 Nishes Grg. All rights reserved.</p>
            </div>
            <div className="col-lg-4  r">
              <p>Privacy Policy | Terms of Use | Legal Site Map</p>
            </div>
            <div className="col-lg-4  r">
              <p>nishesgrg16@gmail.com</p><small className="text-white">Contact No: 9763221391</small>
            </div>
          </div>
        </div>
      </footer>
    </div>


  );
}
