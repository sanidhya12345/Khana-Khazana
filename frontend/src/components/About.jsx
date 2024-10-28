import React from "react";
import {Link} from 'react-router-dom'
import {HiOutlineArrowNarrowRight} from "react-icons/hi";
const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we are serious about food.</p>
          </div>
          <p className="mid">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At aliquid
            nisi quo, consequatur ducimus saepe odio ab repudiandae culpa.
            Quibusdam omnis ratione maxime officiis, quae debitis quidem,
            dolores iure dolorum blanditiis recusandae accusantium, eos mollitia
            doloribus architecto esse optio quo sint vero? Non atque quas
            voluptate. Rem obcaecati accusantium distinctio.
          </p>
          <Link to={"/"}>Explore Menu <span><HiOutlineArrowNarrowRight/></span></Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
