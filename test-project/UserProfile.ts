import React from 'react';

// Define the type for the props
interface UserProfileProps {
  name: string;
  email: string;
  avatar: string;
}

// Create the UserProfile component
const UserProfile: React.FC<UserProfileProps> = ({ name, email, avatar }) => {
  return (
    <div style={styles.container}>
      <img src={avatar} alt={`${name}'s avatar`} style={styles.avatar} />
      <div style={styles.info}>
        <h2 style={styles.name}>{name}</h2>
        <p style={styles.email}>{email}</p>
      </div>
    </div>
  );
};

// Define some basic styles
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '8px',
    maxWidth: '400px',
    margin: '10px auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  avatar: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    marginRight: '15px',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    margin: '0 0 5px 0',
    fontSize: '1.5em',
  },
  email: {
    margin: 0,
    color: '#555',
  },
};

export default UserProfile;