
import React from 'react';
import UserProfileCard from './UserProfileCard';

const App = () => {
  const user = {
    name: "Siddhi",
    email: "siddhi@example.com",
    num: "8899675452",
    profilePicture: "https://randomuser.me/api/portraits/women/10.jpg"
  };

  const user2 = {
    name: "Riddhi",
    email: "riddhi@example.com",
    num: "8899675452",
    profilePicture: "https://randomuser.me/api/portraits/women/10.jpg"
  };

  const user3 = {
    name: "Jay",
    email: "jay@example.com",
    num: "8899675452",
    profilePicture: "https://randomuser.me/api/portraits/women/10.jpg"
  };

  const user4 = {
    name: "Meet",
    email: "meet@example.com",
    num: "8899675452",
    profilePicture: "https://randomuser.me/api/portraits/women/10.jpg"
  };

  return (
<>
<div className="app">
      <h1>User Profile</h1>
      <UserProfileCard 
        name={user.name} 
        email={user.email} 
        num={user.num}
        profilePicture={user.profilePicture} 
      />
    </div>

<div className="app">

<UserProfileCard 
  name={user2.name} 
  email={user2.email} 
  num={user2.num}
  profilePicture={user2.profilePicture} 
/>
</div>

<div className="app">

<UserProfileCard 
  name={user3.name} 
  email={user3.email} 
  num={user3.num}
  profilePicture={user3.profilePicture} 
/>
</div>

<div className="app">

<UserProfileCard 
  name={user4.name} 
  email={user4.email} 
  num={user4.num}
  profilePicture={user4.profilePicture} 
/>
</div>
</>
  );
};

export default App;



