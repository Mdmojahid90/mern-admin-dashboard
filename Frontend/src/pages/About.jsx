function About() {
  return (
    <>
      <section className="section-about">
        <div className="container">
          <h2 className="common-heading">About Mojahid</h2>
          <p>
            Guiding Your Learning Journey Through Research, Design and
            Development Excellence.
          </p>
        </div>
        <div className="container grid grid-three--cols">
          <div className="about-div">
            <div className="icon">
              <img src="/images/manwork.png" alt="" />
            </div>
            <h3 className="title">Design</h3>
            <p>
              Next, we make the lessons. We make them fun and interesting for
              you. We make sure they frok from different ways people like to
              learn.
            </p>
          </div>

          <div className="about-div">
            <div className="icon">
              <img src="/images/research7.png" alt="" />
            </div>
            <h3 className="title">Research</h3>
            <p>
              We start by learning what you need. We look at what's new and
              exciting in learning and choose topics tghat match what you want
              to learn.
            </p>
          </div>
          <div className="about-div">
            <div className="icon">
              <img src="/images/developer7.png" alt="" />
            </div>
            <h3 className="title">Development</h3>
            <p>
              After that, we turn the lessons into things you can use online. We
              use the latest tools to make sure they work well and make you
              happy.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
