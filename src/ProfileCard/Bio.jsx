function Bio({ name, username, profession }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Username: {username}</p>
      <p>{profession}</p>
    </div>
  );
}

export default Bio;
