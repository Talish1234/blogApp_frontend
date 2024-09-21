import React from 'react';
import './About.scss'; 

const About = () => {
  

  return (
    <div className="about-container">
      <h1>Hi, I’m Mohd Talish Ansari,a passionate web developer and college student at ADGITM.</h1>
      <img src='coverImage.jpg'/>
      <section className="intro">
        <p>
      I'm skilled in MERN, C, C++, Java, and Python, and currently focusing on TypeScript. I’ve completed courses like the GeeksforGeeks API Bootcamp and the Great Learning React tutorial. I enjoy working on challenging projects, like my real estate website 'Property Pulse' and a tour booking app.
</p><p>
As a coordinator in my college society 'Awaaz,' I lead teams and manage events, honing my leadership and communication skills. I'm also a part of GeeksforGeeks’ Fullstack Bootcamp, pushing myself to become a better developer.
</p><p>
In my downtime, I like to sketch, play chess, and relax with family. Always eager to learn, I’m constantly improving my skills and exploring new technologies.
</p>
      </section>

      <section className="education">
        <h2>Education</h2>
        <ul>
          <li>
            <strong>ADGITM (Dr. Akhilesh Das Gupta Institute of Technology & Management)</strong><br />
            Bachelor of Technology (B.Tech) - Ongoing<br />
            <em>Specialization: Full-stack Web Development</em>
          </li>
          <li>
            <strong>Courses & Certifications:</strong>
            <ul>
              <li>API Bootcamp: Summer Edition - Sponsored by Postman</li>
              <li>Great Learning React Tutorial</li>
              <li>GeeksforGeeks Fullstack Bootcamp</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="projects">
        <h2>My Projects</h2>
        <ul>
          <li><strong>Property Pulse:</strong> A real estate website offering real-time chat, property sliders, and more.</li>
          <li><strong>Blogging Platform:</strong> Built with <strong>Node.js</strong>, <strong>React</strong>, <strong>SCSS</strong>, and <strong>MongoDB</strong>, aimed at offering a seamless blogging experience.</li>
          <li><strong>Tour Booking App:</strong> A comprehensive application to streamline travel bookings.</li>
        </ul>
      </section>

      <section className="skills">
        <h2>Skills & Expertise</h2>
        <ul>
          <li><strong>Languages:</strong> JavaScript, TypeScript, Python, C++, Java</li>
          <li><strong>Frameworks & Tools:</strong> React, Node.js, Prisma, MongoDB, SCSS</li>
          <li><strong>APIs & Payments:</strong> Experience with Stripe integration and completion of the <strong>API Bootcamp by Postman</strong>.</li>
          <li><strong>Other Skills:</strong> Leadership, team management, and public speaking</li>
        </ul>
      </section>

      <section className="hobbies">
        <h2>My Hobbies</h2>
        <p>
          When I’m not coding, you’ll find me <strong>sketching</strong>, playing <strong>chess</strong>, or relaxing with a walk in the park. I enjoy spending Sundays learning new skills and spending quality time with my family, often watching movies together.
        </p>
        <p>
          I’m currently sharpening my skills in <strong>TypeScript</strong> and enhancing my portfolio with exciting new projects. Feel free to connect with me for collaborations or to explore more about my work.
        </p>
      </section>
    </div>
  );
};

export default About;
