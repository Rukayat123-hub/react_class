import React from "react";

function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Python"];

  return (
    <section>
      <h2>Tech Skills I'm Learning</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
