import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">About Me</h2>

      <p>
        Hello! I’m <strong>Jigyansu Swain</strong>, a passionate Computer Science graduate based in <strong>Kharghar, Navi Mumbai</strong> with a strong foundation in full-stack web development and modern DevOps practices.
      </p>

      <p>
        I thrive on turning ideas into real-world applications using <strong>Java</strong>, <strong>Python</strong>, and <strong>JavaScript</strong>, combined with tools like <strong>Docker</strong>, <strong>Git</strong>, and <strong>Kubernetes</strong>. I'm certified in <strong>IBM DevOps & Software Engineering</strong> and constantly improve my skills through coding challenges on <strong>HackerRank</strong> and <strong>LeetCode</strong>.
      </p>

      <p>
        Whether it’s building a full-stack SaaS dashboard or automating workflows, I enjoy contributing to meaningful projects and exploring new technologies.
      </p>

      <hr />

      <h4>🛠️ Key Skills</h4>
      <ul>
        <li><strong>Languages:</strong> Java (Core), Python, Shell Scripting</li>
        <li><strong>Frontend:</strong> HTML, CSS, JavaScript (Basic), Bootstrap</li>
        <li><strong>Backend & DB:</strong> MySQL, PostgreSQL, REST APIs (Basic)</li>
        <li><strong>Version Control:</strong> Git & GitHub</li>
        <li><strong>DevOps Tools:</strong> Docker, Kubernetes, OpenShift, CI/CD</li>
        <li><strong>Platforms:</strong> Linux, VS Code</li>
      </ul>

      <hr />

      <h4>🎓 Education</h4>
      <ul>
        <li><strong>B.Tech in Computer Science</strong>, ITER Bhubaneswar – 2023</li>
        <li><strong>12th (HSC), Maharashtra Board</strong> – 72.7% (2019)</li>
        <li><strong>10th (CBSE)</strong> – 96.4% (2017)</li>
      </ul>

      <hr />

      <h4>📜 Certifications & Extras</h4>
      <ul>
        <li>✅ IBM DevOps & Software Engineering Certificate – Coursera, Jun 2025</li>
        <li>✅ Completed Salesforce Trailhead modules</li>
        <li>✅ Participant on HackerRank, LeetCode</li>
      </ul>

      <hr />

      <h4>🌐 Languages</h4>
      <p>English | Hindi | Odia</p>
    </Container>
  );
};

export default About;
