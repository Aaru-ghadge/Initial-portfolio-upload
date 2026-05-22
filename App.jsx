import restaurantImg from './assets/restaurant.jpeg';
import portfolioImg from './assets/portfolio.png';
import me from './assets/me.jpeg';
import resume from './assets/resume.png';

export default function App() {

  const projects = [
    {
      title: "Restaurant App",
      desc: "A full restaurant management website with menu display, table reservation system, customer reviews, authentication and responsive UI.",
      tech: "HTML, CSS, JavaScript, Python, Flask, MySQL",
      image: restaurantImg,

    },

    {
      title: "MERN Portfolio Website",
      desc: "A modern responsive portfolio website created using React and Bootstrap to showcase projects, skills and contact information.",
      tech: "React, Bootstrap, JavaScript",
      image: portfolioImg,

    }
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Bootstrap",
    "Node.js",
    "Express.js",
    "MongoDB",
  ];

  return (
    <div className="bg-black text-white min-vh-100">

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
        <div className="container">

          <a className="navbar-brand fw-bold fs-3 text-info" href="#home">
            Aradhana Portfolio
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      {/* Hero Section */}
      <section
        id="home"
        className="d-flex align-items-center justify-content-center text-center hero-section"
      >
        <div className="container">

          <h1 className="display-2 fw-bold text-info">
            Hi, I'm Aradhana 👋
          </h1>

          <h2 className="mt-3">
            Full Stack MERN Developer
          </h2>

          <p className="lead mt-4 text-light">
            I build modern, responsive and full stack web applications using MERN Stack.
          </p>

          <p className="text-secondary fs-5">
            Passionate about creating responsive websites and real-world projects.
          </p>


          <div className="mt-4 d-flex gap-3 justify-content-center flex-wrap">

            <a href="#projects" className="btn btn-info btn-lg">
              View Projects
            </a>

<a
  href="/resume.png"
  className="btn btn-outline-light btn-lg"
  download
>
  Download Resume
</a>
          </div>


          {/* Social Links */}
          <div className="mt-4 d-flex gap-4 justify-content-center">

            <a
              href="https://github.com/Aaru-ghadge"
              target="_blank"
              className="text-info text-decoration-none"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/aradhana-ghadge-4a8757365"
              target="_blank"
              className="text-info text-decoration-none"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>


      {/* About */}
      <section id="about" className="container py-5">

        <h1 className="text-center text-info mb-5">
          About Me
        </h1>

        <div className="row align-items-center g-5">

          <div className="col-md-5 text-center">
            <img
              src={me}
              className="img-fluid rounded shadow-lg about-image"
              alt="about"
            />
          </div>

          <div className="col-md-7">

            <p className="fs-5 text-light">
              I am a fresher MERN Stack developer passionate about building modern and responsive full stack web applications.
            </p>

            <p className="fs-5 text-light">
              I enjoy working with React, Node.js, Express.js and MongoDB to create user-friendly websites and REST APIs.
            </p>

            <p className="fs-5 text-light">
              My goal is to become a professional software developer and contribute to real-world projects.
            </p>
          </div>
        </div>
      </section>


      {/* Skills */}
      <section id="skills" className="py-5 bg-dark">
        <div className="container">

          <h1 className="text-center text-info mb-5">
            Skills
          </h1>

          <div className="row g-4">
            {skills.map((skill, index) => (
              <div key={index} className="col-6 col-md-3">

                <div className="card bg-black border-info text-center h-100 shadow-lg skill-card">
                  <div className="card-body">
                    <h5 className="card-title text-info">
                      {skill}
                    </h5>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Projects */}
      <section id="projects" className="container py-5">

        <h1 className="text-center text-info mb-5">
          Projects
        </h1>

        <div className="row g-4">

          {projects.map((project, index) => (
            <div key={index} className="col-md-6">

              <div className="card bg-dark text-white h-100 shadow-lg border border-info project-card">

                <img
                  src={project.image}
                  className="card-img-top"
                  alt="project"
                  style={{ height: '250px', objectFit: 'cover' }}
                />

                <div className="card-body d-flex flex-column">

                  <h3 className="card-title text-info">
                    {project.title}
                  </h3>

                  <p>
                    {project.desc}
                  </p>

                  <p>
                    <strong>Tech:</strong> {project.tech}
                  </p>
                </div>


                
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Contact */}
      <section id="contact" className="py-5 bg-dark">
        <div className="container">

          <h1 className="text-center text-info mb-5">
            Contact Me
          </h1>

          <div className="row justify-content-center">
            <div className="col-md-8">

              <div className="card bg-black border-info shadow-lg">
                <div className="card-body p-4">

                  <form
                    action="https://formsubmit.co/aradhanaghadge@gmail.com"
                    method="POST"
                  >

                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <textarea
                        rows="5"
                        className="form-control"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>

                    <button className="btn btn-info w-100">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-black text-center py-4 border-top border-secondary">

        <p className="mb-3 text-light">
          © 2026 Aradhana Portfolio | MERN Stack Developer
        </p>

        <div className="d-flex justify-content-center gap-4">

          <a
            href="https://github.com/Aaru-ghadge"
            target="_blank"
            className="text-info text-decoration-none"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/aradhana-ghadge-4a8757365"
            target="_blank"
            className="text-info text-decoration-none"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}


