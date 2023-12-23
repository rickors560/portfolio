import "./styles.scss";

import React from "react";

function AboutMe() {
  return (
    <>
      <header>
        <h3 className="h3 main-title">
          <b>About Me</b>
        </h3>
        <section className="mt-3">
          <p>
            Delighted to have you here! I specialize in Java, Spring Boot,
            React.js, JavaScript, HTML, CSS, Docker, Kubernetes, & Cloud
            Computing. Allow me to unveil my journey and what fuels my work:
          </p>
          <h5 className="h5">
            <b>My Journey</b>
          </h5>
          <p>
            Embarking on an exploration as a tech enthusiast and problem solver,
            I&apos;ve navigated the realms of full-stack development. Swiftly
            adapting to emerging tech, I thrive in collaborative, innovative
            settings.
          </p>

          <h5 className="h5">
            <b>Expertise Highlights</b>
          </h5>
          <ul>
            <li>💻 Java: Crafting intricate solutions beyond a language.</li>
            <li>🌱 Spring Boot: Architecting scalable backend systems.</li>
            <li>
              🚀 Learning: Fearlessly embracing new tech for practical
              solutions.
            </li>
            <li>
              👨‍💻 Problem Solving: Analytics-driven approach for code
              optimization.
            </li>
          </ul>

          <h5 className="h5">
            <b>Guiding Principles</b>
          </h5>
          <ul>
            <li>
              🤝 Collaboration: Diverse perspectives fuel innovative solutions.
            </li>
            <li>
              📚 Continuous Learning: Staying ahead in the evolving tech
              landscape.
            </li>
            <li>🌟 Quality Code: Crafting elegant, maintainable solutions.</li>
          </ul>

          <p>
            Explore my portfolio and GitHub for insights into my impactful
            solutions.
          </p>
        </section>
      </header>
    </>
  );
}

export default AboutMe;
