function Service() {
  return (
    <>
      <section className="section-service">
        <div className="container">
          <h2 className="common-heading">Service Offers</h2>
          <p>Discover a variety of skills across different categories.</p>
        </div>
        <div className="container grid grid-three--cols">
          <div className="service-box">
            <i className="fa-solid fa-laptop-code icon"></i>
            <h3 className="title">Web Design</h3>
            <p>
              Web design involves creating the visual layout and aesthetics of a
              website, focusing on user experience, graphics, and overall look.
            </p>
          </div>
          <div className="service-box">
            <i className="fa-brands fa-react icon"></i>
            <h3 className="title">MERN</h3>
            <p>
              The MERN stack is a collection of technologies that help
              developers build robust and scalable web applications using
              JavaScript.
            </p>
          </div>
          <div className="service-box">
            <i className="fa-solid fa-laptop icon"></i>
            <h3 className="title">Web Development</h3>
            <p>
              Web development is the process of building, programming, and
              maintaining websites and web applications.
            </p>
          </div>
          <div className="service-box">
            <i className="fa-solid fa-camera icon"></i>
            <h3 className="title">Photography</h3>
            <p>
              The word Photography literally means 'drawing with light', which
              derives from the Greek photo, meaning light and graph, meaning to
              draw.
            </p>
          </div>
          <div className="service-box">
            <i className="fa-brands fa-app-store icon"></i>
            <h3 className="title">Apps Interface</h3>
            <p>
              An application interface, or user interface, is the set of
              features an application provides so that a user may supply input
              to and receive output from the program.
            </p>
          </div>
          <div className="service-box">
            <i className="fa-solid fa-gamepad icon"></i>
            <h3 className="title">Graphic Design</h3>
            <p>
              Graphic design is a craft where professionals create visual
              content to communicate messages.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
