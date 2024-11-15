
import React from 'react';
import './UserProfileCard.css'; 

const UserProfileCard = ({ name, email, num, profilePicture }) => {
  return (
    <>
    <div className="user-profile-card">
      <img className="profile-picture" src={profilePicture} alt={`${name}'s profile`} />
      <div className="user-info">
        <h2 className="user-name">{name}</h2>
        <p className="user-email">{email}</p>
        <p className="user-number">{num}</p>
      </div>
    </div>
</>
  );
};


export default UserProfileCard;
