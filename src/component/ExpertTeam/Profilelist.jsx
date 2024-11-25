import React from "react";
import ProfileCard from "./ProfileCard";

const ProfileList = () => {
  const profiles = [
    {
      name: "Vũ Đăng Minh",
      experience: "Kinh nghiệm 07+ năm",
      position: "CTO-NSGEDU",
      stars: 5,
    },
    {
      name: "Nguyễn Thị Hạnh",
      experience: "Kinh nghiệm 05+ năm",
      position: "Lead Developer",
      stars: 4,
    },
    {
      name: "Trần Quốc Hưng",
      experience: "Kinh nghiệm 10+ năm",
      position: "Senior Architect",
      stars: 5,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          name={profile.name}
          experience={profile.experience}
          position={profile.position}
          stars={profile.stars}
        />
      ))}
    </div>
  );
};

export default ProfileList;
