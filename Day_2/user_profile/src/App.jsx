//    // src/App.jsx
import React from "react";
import ProfileCard from "./ProfileCard";
import ProfileHeader from "./ProfileHeader";
import ProfileStats from "./ProfileStats";
import SkillBadge from "./SkillBadge";

const App = () => {
  return (
    <ProfileCard>
      <ProfileHeader
        name="Odeleye Rukayat Ajoke"
        title="Senior Developer at Paystack"
        avatar="images (26).jpeg"
      />

      <ProfileStats projects="45" followers="1.2K" following="300" />

      <div style={{ textAlign: "center" }}>
        <h3>Skills:</h3>
        <div>
          <SkillBadge skill="React" level="Expert" />
          <SkillBadge skill="JavaScript" level="Expert" />
          <SkillBadge skill="CSS" level="Intermediate" />
          <SkillBadge skill="Python" level="Beginner" />
        </div>
      </div>
    </ProfileCard>
  );
};

export default App;

